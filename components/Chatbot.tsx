import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGeminiStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { v4 as uuidv4 } from 'uuid'; // For generating unique session IDs

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>(uuidv4()); // Unique ID for the chat session

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const newUserMessage: ChatMessage = { sender: 'user', text: input.trim() };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');
    setIsLoading(true);

    const botMessagePlaceholder: ChatMessage = { sender: 'model', text: '', isStreaming: true };
    setMessages((prevMessages) => [...prevMessages, botMessagePlaceholder]);

    try {
      // Updated callback signature to receive sources
      await sendMessageToGeminiStream(
        sessionIdRef.current,
        newUserMessage.text,
        (chunk: string, isDone: boolean, sources?: string[]) => {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (lastMessage && lastMessage.sender === 'model' && lastMessage.isStreaming) {
              return prevMessages.map((msg, index) =>
                index === prevMessages.length - 1
                  ? { ...msg, text: chunk, isStreaming: !isDone, sources: isDone ? sources : msg.sources } // Update sources only when done
                  : msg
              );
            }
            // Fallback for unexpected state, should generally not be hit if placeholder is always added.
            return [...prevMessages, { sender: 'model', text: chunk, isStreaming: !isDone, sources: isDone ? sources : undefined }];
          });
          if (isDone) {
            setIsLoading(false);
          }
        },
        (error: string) => {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            if (lastMessage && lastMessage.sender === 'model' && lastMessage.isStreaming) {
              return prevMessages.map((msg, index) =>
                index === prevMessages.length - 1
                  ? { ...msg, text: error, isStreaming: false, sender: 'model' }
                  : msg
              );
            }
            return [...prevMessages, { sender: 'model', text: error, isStreaming: false }];
          });
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.sender === 'model' && lastMessage.isStreaming) {
          return prevMessages.map((msg, index) =>
            index === prevMessages.length - 1
              ? { ...msg, text: 'An unexpected error occurred.', isStreaming: false, sender: 'model' }
              : msg
          );
        }
        return [...prevMessages, { sender: 'model', text: 'An unexpected error occurred.', isStreaming: false }];
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] max-h-[800px] bg-gray-100 rounded-xl shadow-xl overflow-hidden border border-gray-200">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            Ask me anything about Pujith's portfolio! (e.g., "Tell me about her experience.", "What projects has she built?", "List her YouTube channels.")
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-xl shadow-md ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white' // Darker blue for user messages
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
              {message.isStreaming && (
                <div className="mt-1">
                  <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-300 animate-pulse mr-1"></span>
                  <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-300 animate-pulse animation-delay-100 mr-1"></span>
                  <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-300 animate-pulse animation-delay-200"></span>
                </div>
              )}
              {/* Render sources if available */}
              {message.sources && message.sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-500">
                  <strong>Sources:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-0.5">
                    {message.sources.map((source, srcIndex) => (
                      <li key={srcIndex}>
                        <a href={source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && messages.length > 0 && messages[messages.length - 1].sender === 'user' && (
             <div className="flex justify-start">
               <div className="max-w-[70%] p-3 rounded-xl shadow-md bg-white text-gray-800 border border-gray-200">
                 <div className="mt-1">
                  <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-300 animate-pulse mr-1"></span>
                  <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-300 animate-pulse animation-delay-100 mr-1"></span>
                  <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-300 animate-pulse animation-delay-200"></span>
                 </div>
               </div>
             </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Pujith's portfolio..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`ml-4 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 ${
            input.trim() === '' || isLoading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={input.trim() === '' || isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Send'
          )}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;