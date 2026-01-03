import { ENDPOINTS, request } from './api';

export interface Site {
    id: string;
    name: string;
    url: string;
    platform: string;
    status: 'connected' | 'error' | 'syncing';
    pages: number;
    lastSync: string;
    visibilityScore: number;
}

export interface CreateSiteData {
    name: string;
    url: string;
    platform: string;
    apiKey?: string;
}

export const sitesService = {
    getSites: async (): Promise<Site[]> => {
        return request<Site[]>(ENDPOINTS.SITES.LIST);
    },

    getSite: async (id: string): Promise<Site> => {
        return request<Site>(ENDPOINTS.SITES.GET(id));
    },

    createSite: async (data: CreateSiteData): Promise<Site> => {
        return request<Site>(ENDPOINTS.SITES.CREATE, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    updateSite: async (id: string, data: Partial<CreateSiteData>): Promise<Site> => {
        return request<Site>(ENDPOINTS.SITES.UPDATE(id), {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },

    deleteSite: async (id: string): Promise<void> => {
        return request<void>(ENDPOINTS.SITES.DELETE(id), {
            method: 'DELETE',
        });
    },

    syncSite: async (id: string): Promise<void> => {
        return request<void>(ENDPOINTS.SITES.SYNC(id), {
            method: 'POST',
        });
    },

    getSiteSettings: async (id: string): Promise<any> => {
        return request<any>(ENDPOINTS.SITES.SETTINGS(id));
    },

    updateSiteSettings: async (id: string, settings: any): Promise<any> => {
        return request<any>(ENDPOINTS.SITES.SETTINGS(id), {
            method: 'PUT',
            body: JSON.stringify(settings),
        });
    },
};
