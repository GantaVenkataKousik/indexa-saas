'use client';

import { useState, useEffect } from 'react';
import { User, onAuthStateChange, getIdToken } from '@/services/firebase-auth';

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: Error | null;
}

/**
 * Custom hook for Firebase authentication
 * Automatically subscribes to auth state changes
 */
export const useAuth = () => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChange((user) => {
            setAuthState({
                user,
                loading: false,
                error: null,
            });
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return authState;
};

/**
 * Hook to get the user's ID token
 */
export const useIdToken = () => {
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchToken = async () => {
            if (user) {
                try {
                    const idToken = await getIdToken();
                    setToken(idToken);
                } catch (error) {
                    console.error('Error fetching ID token:', error);
                    setToken(null);
                }
            } else {
                setToken(null);
            }
            setLoading(false);
        };

        fetchToken();
    }, [user]);

    return { token, loading };
};
