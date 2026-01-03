import { ENDPOINTS, request } from './api';

export interface KeywordData {
    keyword: string;
    volume: number;
    difficulty: number;
    opportunityScore: number;
}

export interface CompetitorData {
    domain: string;
    overlap: number;
    keywords: number;
    traffic: number;
}

export interface TopicAnalysis {
    topic: string;
    sentiment: string;
    mentions: number;
    trends: any[];
}

export const researchService = {
    getKeywords: async (query: string): Promise<KeywordData[]> => {
        return request<KeywordData[]>(`${ENDPOINTS.RESEARCH.KEYWORDS}?query=${encodeURIComponent(query)}`);
    },

    getCompetitors: async (domain: string): Promise<CompetitorData[]> => {
        return request<CompetitorData[]>(`${ENDPOINTS.RESEARCH.COMPETITORS}?domain=${encodeURIComponent(domain)}`);
    },

    analyzeTopic: async (topic: string): Promise<TopicAnalysis> => {
        return request<TopicAnalysis>(`${ENDPOINTS.RESEARCH.TOPICS}?topic=${encodeURIComponent(topic)}`);
    },
};
