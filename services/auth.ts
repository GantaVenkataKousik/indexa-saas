import { ENDPOINTS, request } from './api';

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'viewer';
    avatar?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export const authService = {
    login: async (credentials: { email: string; password: string }): Promise<AuthResponse> => {
        return request<AuthResponse>(ENDPOINTS.AUTH.LOGIN, {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    },

    register: async (data: any): Promise<AuthResponse> => {
        return request<AuthResponse>(ENDPOINTS.AUTH.REGISTER, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    logout: async (): Promise<void> => {
        return request<void>(ENDPOINTS.AUTH.LOGOUT, {
            method: 'POST',
        });
    },

    getProfile: async (): Promise<User> => {
        return request<User>(ENDPOINTS.AUTH.PROFILE);
    },

    refreshToken: async (): Promise<{ token: string }> => {
        return request<{ token: string }>(ENDPOINTS.AUTH.REFRESH_TOKEN, {
            method: 'POST',
        });
    },
};

