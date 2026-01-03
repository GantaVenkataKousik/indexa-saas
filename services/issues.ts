import { ENDPOINTS, request } from './api';

export interface Issue {
    id: string;
    title: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    status: 'open' | 'fixed' | 'ignored';
    description: string;
    affectedPages: number;
    createdAt: string;
}

export const issuesService = {
    getIssues: async (filters?: any): Promise<Issue[]> => {
        const queryString = filters ? `?${new URLSearchParams(filters)}` : '';
        return request<Issue[]>(`${ENDPOINTS.ISSUES.LIST}${queryString}`);
    },

    getIssueDetails: async (id: string): Promise<Issue> => {
        return request<Issue>(ENDPOINTS.ISSUES.DETAILS(id));
    },

    fixIssue: async (id: string): Promise<void> => {
        return request<void>(ENDPOINTS.ISSUES.FIX(id), {
            method: 'POST',
        });
    },

    ignoreIssue: async (id: string): Promise<void> => {
        return request<void>(ENDPOINTS.ISSUES.IGNORE(id), {
            method: 'POST',
        });
    },
};
