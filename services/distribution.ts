import { ENDPOINTS, request } from './api';

export interface DistributionChannel {
    id: string;
    name: string;
    type: 'social' | 'blog' | 'email';
    status: 'connected' | 'disconnected' | 'error';
    lastUsed?: string;
}

export interface DistributionHistoryItem {
    id: string;
    contentId: string;
    channelId: string;
    status: 'success' | 'failed' | 'pending';
    timestamp: string;
}

export const distributionService = {
    getChannels: async (): Promise<DistributionChannel[]> => {
        return request<DistributionChannel[]>(ENDPOINTS.DISTRIBUTION.CHANNELS);
    },

    connectChannel: async (type: string, credentials: any): Promise<DistributionChannel> => {
        return request<DistributionChannel>(ENDPOINTS.DISTRIBUTION.CONNECT, {
            method: 'POST',
            body: JSON.stringify({ type, credentials }),
        });
    },

    disconnectChannel: async (id: string): Promise<void> => {
        return request<void>(ENDPOINTS.DISTRIBUTION.DISCONNECT(id), {
            method: 'DELETE',
        });
    },

    getDistributionHistory: async (): Promise<DistributionHistoryItem[]> => {
        return request<DistributionHistoryItem[]>(ENDPOINTS.DISTRIBUTION.HISTORY);
    },
};
