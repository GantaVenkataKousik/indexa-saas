
export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || '/api',
    TIMEOUT: 10000,
};

export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
        PROFILE: '/auth/profile',
        REFRESH_TOKEN: '/auth/refresh',
    },
    AI: {
        CHAT: '/ai/chat',
        ANALYZE: '/ai/analyze',
        SUMMARIZE: '/ai/summarize',
        GENERATE: '/ai/generate',
    },
    SITES: {
        LIST: '/sites',
        CREATE: '/sites',
        GET: (id: string) => `/sites/${id}`,
        UPDATE: (id: string) => `/sites/${id}`,
        DELETE: (id: string) => `/sites/${id}`,
        SYNC: (id: string) => `/sites/${id}/sync`,
        SETTINGS: (id: string) => `/sites/${id}/settings`,
    },
    RESEARCH: {
        KEYWORDS: '/research/keywords',
        COMPETITORS: '/research/competitors',
        TOPICS: '/research/topics',
    },
    CITATIONS: {
        LIST: '/citations',
        CHECK: '/citations/check',
        STATS: '/citations/stats',
        DETAILS: (id: string) => `/citations/${id}`,
    },
    ANALYTICS: {
        OVERVIEW: '/analytics/overview',
        TRAFFIC: '/analytics/traffic',
        DEVICES: '/analytics/devices',
        REVENUE: '/analytics/revenue',
    },
    ISSUES: {
        LIST: '/issues',
        DETAILS: (id: string) => `/issues/${id}`,
        FIX: (id: string) => `/issues/${id}/fix`,
        IGNORE: (id: string) => `/issues/${id}/ignore`,
    },
    CONTENT: {
        LIST: '/content',
        CREATE: '/content',
        GET: (id: string) => `/content/${id}`,
        UPDATE: (id: string) => `/content/${id}`,
        DELETE: (id: string) => `/content/${id}`,
        PUBLISH: (id: string) => `/content/${id}/publish`,
    },
    DISTRIBUTION: {
        CHANNELS: '/distribution/channels',
        CONNECT: '/distribution/connect',
        DISCONNECT: (id: string) => `/distribution/channels/${id}`,
        HISTORY: '/distribution/history',
    },
};

export const HEADERS = {
    DEFAULT: {
        'Content-Type': 'application/json',
    },
    AUTH: (token: string) => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }),
};

export async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const headers = {
        ...HEADERS.DEFAULT,
        ...options.headers,
    };

    const config: RequestInit = {
        ...options,
        headers,
    };

    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API Request Failed:', error);
        throw error;
    }
}
