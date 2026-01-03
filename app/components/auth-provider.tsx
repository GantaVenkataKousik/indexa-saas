'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth, AuthState } from '@/hooks/use-auth';
import {
    signInWithGoogle,
    signInWithGoogleRedirect,
    signInWithEmail,
    registerWithEmail,
    resetPassword,
    logout,
    updateUserProfile,
    getIdToken,
} from '@/services/firebase-auth';

interface AuthContextType extends AuthState {
    signInWithGoogle: () => Promise<any>;
    signInWithGoogleRedirect: () => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<any>;
    registerWithEmail: (email: string, password: string, displayName?: string) => Promise<any>;
    resetPassword: (email: string) => Promise<void>;
    logout: () => Promise<void>;
    updateUserProfile: (updates: { displayName?: string; photoURL?: string }) => Promise<void>;
    getIdToken: (forceRefresh?: boolean) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const auth = useAuth();

    const value: AuthContextType = {
        ...auth,
        signInWithGoogle,
        signInWithGoogleRedirect,
        signInWithEmail,
        registerWithEmail,
        resetPassword,
        logout,
        updateUserProfile,
        getIdToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook to use the Auth context
 * Must be used within AuthProvider
 */
export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
