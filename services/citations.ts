import { ENDPOINTS, request } from './api';

export interface Citation {
    id: string;
    source: string;
    query: string;
    sentiment: 'Positive' | 'Neutral' | 'Negative';
    date: string;
    context: string;
}

export interface CitationStats {
    totalCitations: number;
    trend: number;
    topSource: string;
    topSourcePercentage: number;
    sentimentScore: number;
}

export const citationsService = {
    getCitations: async (filters?: any): Promise<Citation[]> => {
        const queryString = filters ? `?${new URLSearchParams(filters)}` : '';
        return request<Citation[]>(`${ENDPOINTS.CITATIONS.LIST}${queryString}`);
    },

    runScan: async (siteId?: string): Promise<any> => {
        return request<any>(ENDPOINTS.CITATIONS.CHECK, {
            method: 'POST',
            body: JSON.stringify({ siteId }),
        });
    },

    getCitationStats: async (): Promise<CitationStats> => {
        return request<CitationStats>(ENDPOINTS.CITATIONS.STATS);
    },

    getCitationDetails: async (id: string): Promise<Citation> => {
        return request<Citation>(ENDPOINTS.CITATIONS.DETAILS(id));
    },
};
