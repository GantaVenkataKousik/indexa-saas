import { ENDPOINTS, request } from './api';

export interface ContentItem {
    id: string;
    title: string;
    status: 'draft' | 'published' | 'scheduled';
    author: string;
    publishDate?: string;
    views?: number;
    citations?: number;
}

export interface CreateContentData {
    title: string;
    body: string;
    status: 'draft' | 'published' | 'scheduled';
    publishDate?: string;
    tags?: string[];
}

export const contentService = {
    getContentList: async (filters?: any): Promise<ContentItem[]> => {
        const queryString = filters ? `?${new URLSearchParams(filters)}` : '';
        return request<ContentItem[]>(`${ENDPOINTS.CONTENT.LIST}${queryString}`);
    },

    getContent: async (id: string): Promise<ContentItem> => {
        return request<ContentItem>(ENDPOINTS.CONTENT.GET(id));
    },

    createContent: async (data: CreateContentData): Promise<ContentItem> => {
        return request<ContentItem>(ENDPOINTS.CONTENT.CREATE, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    updateContent: async (id: string, data: Partial<CreateContentData>): Promise<ContentItem> => {
        return request<ContentItem>(ENDPOINTS.CONTENT.UPDATE(id), {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },

    deleteContent: async (id: string): Promise<void> => {
        return request<void>(ENDPOINTS.CONTENT.DELETE(id), {
            method: 'DELETE',
        });
    },

    publishContent: async (id: string, channels: string[]): Promise<void> => {
        return request<void>(ENDPOINTS.CONTENT.PUBLISH(id), {
            method: 'POST',
            body: JSON.stringify({ channels }),
        });
    },
};
