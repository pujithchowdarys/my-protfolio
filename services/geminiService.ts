import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';
import {
    PROFILE_NAME,
    ABOUT_ME_TEXT,
    CAREER_EXPERIENCE,
    // Fix: PROJECTS is now a combined array, removing individual project lists.
    PROJECTS, 
    // Fix: Replaced SOCIAL_MEDIA_LINKS with CATEGORIZED_SOCIAL_MEDIA_LINKS as per constants.ts export.
    CATEGORIZED_SOCIAL_MEDIA_LINKS,
    CONTACT_EMAIL,
    PHONE_NUMBER,
    LINKEDIN_PROFILE
} from '../constants';

const MODEL_NAME = 'gemini-2.5-flash';

// This function creates a new GoogleGenAI instance on demand.
// In a real application, you might use a context or a singleton pattern
// to manage the API key and client instance more robustly,
// especially if the key can change during runtime.
const getGeminiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set. Please ensure it's configured.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

const chatInstances = new Map<string, Chat>();

// Function to dynamically create the system instruction for the AI.
// This provides the AI with a comprehensive grounding context about the portfolio.
function createGroundingContext(): string {
  const formattedExperiences = CAREER_EXPERIENCE.map(
    (exp) => `  - **${exp.title}** at ${exp.company} (${exp.duration}): ${exp.responsibilities.join(' ')}`
  ).join('\n');

  // Fix: Use the combined PROJECTS array.
  const formattedProjects = PROJECTS.map(
    (proj) => `  - **${proj.name}**: ${proj.description} Technologies: ${proj.technologies.join(', ')}`
  ).join('\n');

  // Fix: Iterate over CATEGORIZED_SOCIAL_MEDIA_LINKS which is an object of arrays.
  const formattedSocialMedia = Object.values(CATEGORIZED_SOCIAL_MEDIA_LINKS)
    .flat() // Flatten the arrays of links into a single array
    .map(
      (link) => `  - ${link.name} (${link.platform}): ${link.url} - ${link.description || 'No description provided.'}`
    ).join('\n');

  return `
    You are an AI assistant specialized in answering questions about ${PROFILE_NAME}'s professional portfolio.
    Your goal is to provide helpful, concise, and accurate information based on the details provided below.

    --- Portfolio Information ---

    **About ${PROFILE_NAME}:**
    ${ABOUT_ME_TEXT}

    **Career Experience:**
    ${formattedExperiences}

    **Projects:**
    ${formattedProjects}

    **Social Media Presence:**
    ${formattedSocialMedia}

    **Contact Information:**
    Email: ${CONTACT_EMAIL}
    Phone: ${PHONE_NUMBER}
    LinkedIn: ${LINKEDIN_PROFILE}

    --- Instructions ---
    1. Answer questions based *solely* on the provided portfolio information.
    2. If a question requires external or real-time information, utilize Google Search.
    3. Be conversational and friendly.
    4. If you cannot find the answer within the provided context or through search, state that you don't have enough information.
    5. Maintain a professional yet approachable tone.
    `;
}

export async function sendMessageToGeminiStream(
  sessionId: string,
  userMessage: string,
  // Updated callback signature for onNewChunk to pass sources
  onNewChunk: (chunk: string, isDone: boolean, sources?: string[]) => void,
  onError: (error: string) => void,
) {
  try {
    const ai = getGeminiClient();
    let chat = chatInstances.get(sessionId);

    // If no chat instance for this session, create a new one.
    // The initial system instruction and grounding context are crucial here.
    if (!chat) {
      chat = ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: createGroundingContext(),
          // Enable Google Search for broader grounding as per guidelines.
          // This allows the model to search for answers not directly in the provided portfolio context.
          tools: [{ googleSearch: {} }],
        },
      });
      chatInstances.set(sessionId, chat);
    }

    // Fix: Removed incorrect type annotation 'GenAICatMessage'.
    // The object literal is directly compatible with ChatRequest.
    const genAIChatMessage = { message: userMessage };

    const responseStream = await chat.sendMessageStream(genAIChatMessage);

    let fullResponse = '';
    // Use a Set to store unique URLs collected from grounding chunks
    let uniqueGroundingUrls = new Set<string>();

    for await (const chunk of responseStream) {
      const textChunk = chunk.text;
      if (textChunk) {
        fullResponse += textChunk;
        onNewChunk(fullResponse, false); // Send cumulative response, no sources yet for partial chunks
      }

      // Extract grounding URLs if available
      if (chunk.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        for (const gc of chunk.candidates[0].groundingMetadata.groundingChunks) {
          if (gc.web?.uri) {
            uniqueGroundingUrls.add(gc.web.uri);
          }
          if (gc.maps?.uri) {
            uniqueGroundingUrls.add(gc.maps.uri);
          }
          if (gc.maps?.placeAnswerSources) {
            // Fix: Add Array.isArray check to ensure placeAnswerSources is iterable before looping.
            if (Array.isArray(gc.maps.placeAnswerSources)) {
              for (const pas of gc.maps.placeAnswerSources) {
                  // Fix: Add Array.isArray check to ensure reviewSnippets is iterable before looping.
                  if (pas.reviewSnippets && Array.isArray(pas.reviewSnippets)) {
                      for (const review of pas.reviewSnippets) {
                          if (review.uri) {
                              uniqueGroundingUrls.add(review.uri);
                          }
                      }
                  }
              }
            }
          }
        }
      }
    }
    // Convert Set to Array for the final output
    const finalGroundingUrls = Array.from(uniqueGroundingUrls);

    // Signal completion and send final response including sources
    onNewChunk(fullResponse, true, finalGroundingUrls);

  } catch (error: unknown) {
    console.error("Gemini API error:", error);
    if (error instanceof Error) {
      onError(`Failed to get response from AI: ${error.message}`);
    } else {
      onError("An unknown error occurred while communicating with the AI.");
    }
  }
}

/**
 * Initializes a new chat session.
 * @param sessionId A unique identifier for the chat session.
 * @returns The initialized Chat instance.
 */
export async function initializeChatSession(sessionId: string): Promise<Chat> {
  const ai = getGeminiClient();
  const chat = ai.chats.create({
    model: MODEL_NAME,
    config: {
      systemInstruction: createGroundingContext(),
      tools: [{ googleSearch: {} }],
    },
  });
  chatInstances.set(sessionId, chat);
  return chat;
}