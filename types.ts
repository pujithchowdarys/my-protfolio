export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl: string;
}

export interface SocialMedia {
  platform: 'YouTube' | 'Facebook' | 'Instagram' | 'X' | 'Telegram' | 'TikTok' | 'Pinterest' | 'Snapchat' | 'LinkedIn';
  name: string;
  url: string;
  description?: string;
  icon?: string; // Optional for custom icons
}

export interface ChatMessage {
  sender: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
  sources?: string[];
}