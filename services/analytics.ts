import { ENDPOINTS, request } from './api';

export interface OverviewStats {
    visibilityScore: number;
    visibilityTrend: number;
    aiCitations: number;
    citationsTrend: number;
    indexedPages: number;
    indexedTrend: number;
    issuesFixed: number;
    issuesTrend: number;
}

export interface TrafficData {
    date: string;
    value: number;
}

export interface DeviceData {
    name: string;
    value: number;
    color: string;
}

export interface RevenueData {
    month: string;
    amount: number;
}

export const analyticsService = {
    getOverviewStats: async (): Promise<OverviewStats> => {
        return request<OverviewStats>(ENDPOINTS.ANALYTICS.OVERVIEW);
    },

    getTrafficData: async (period: 'day' | 'week' | 'month' | 'year' = 'month'): Promise<TrafficData[]> => {
        return request<TrafficData[]>(`${ENDPOINTS.ANALYTICS.TRAFFIC}?period=${period}`);
    },

    getDeviceStats: async (): Promise<DeviceData[]> => {
        return request<DeviceData[]>(ENDPOINTS.ANALYTICS.DEVICES);
    },

    getRevenueStats: async (): Promise<RevenueData[]> => {
        return request<RevenueData[]>(ENDPOINTS.ANALYTICS.REVENUE);
    },
};
