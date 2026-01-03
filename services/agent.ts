import { ENDPOINTS, request } from './api';

export interface AgentMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export interface AnalysisResult {
    summary: string;
    insights: string[];
    recommendations: string[];
}

export const agentService = {
    sendMessage: async (message: string, context?: any): Promise<AgentMessage> => {
        return request<AgentMessage>(ENDPOINTS.AI.CHAT, {
            method: 'POST',
            body: JSON.stringify({ message, context }),
        });
    },

    analyzeData: async (data: any, type: 'citation' | 'traffic' | 'content'): Promise<AnalysisResult> => {
        return request<AnalysisResult>(ENDPOINTS.AI.ANALYZE, {
            method: 'POST',
            body: JSON.stringify({ data, type }),
        });
    },

    summarizeContent: async (content: string): Promise<string> => {
        const result = await request<{ summary: string }>(ENDPOINTS.AI.SUMMARIZE, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });
        return result.summary;
    },

    generateContent: async (prompt: string, type: 'blog' | 'social' | 'email'): Promise<string> => {
        const result = await request<{ content: string }>(ENDPOINTS.AI.GENERATE, {
            method: 'POST',
            body: JSON.stringify({ prompt, type }),
        });
        return result.content;
    },
};
