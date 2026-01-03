'use client';

import {
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    User as FirebaseUser,
    UserCredential,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    updateProfile,
    deleteUser,
    getRedirectResult,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

// Google Auth Provider instance
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
    prompt: 'select_account', // Forces account selection
});

// Add scopes for additional user information
googleProvider.addScope('profile');
googleProvider.addScope('email');

export interface User {
    id: string;
    name: string | null;
    email: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    role?: 'admin' | 'user' | 'viewer';
}

/**
 * Convert Firebase User to our User interface
 */
const convertFirebaseUser = (firebaseUser: FirebaseUser): User => {
    return {
        id: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL,
        emailVerified: firebaseUser.emailVerified,
        phoneNumber: firebaseUser.phoneNumber,
    };
};

/**
 * Sign in with Google using popup
 * Recommended for desktop
 */
export const signInWithGoogle = async (): Promise<UserCredential> => {
    try {
        if (!auth) throw new Error("Firebase Auth not initialized");
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error: any) {
        console.error('Error signing in with Google:', error);
        throw new Error(error.message || 'Failed to sign in with Google');
    }
};

/**
 * Sign in with Google using redirect
 * Recommended for mobile devices
 */
export const signInWithGoogleRedirect = async (): Promise<void> => {
    try {
        if (!auth) throw new Error("Firebase Auth not initialized");
        await signInWithRedirect(auth, googleProvider);
    } catch (error: any) {
        console.error('Error signing in with Google redirect:', error);
        throw new Error(error.message || 'Failed to sign in with Google');
    }
};

/**
 * Get redirect result after returning from OAuth provider
 */
export const handleRedirectResult = async (): Promise<UserCredential | null> => {
    try {
        if (!auth) return null;
        const result = await getRedirectResult(auth);
        return result;
    } catch (error: any) {
        console.error('Error handling redirect result:', error);
        throw new Error(error.message || 'Failed to handle redirect result');
    }
};

/**
 * Sign in with email and password
 */
export const signInWithEmail = async (
    email: string,
    password: string
): Promise<UserCredential> => {
    try {
        if (!auth) throw new Error("Firebase Auth not initialized");
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error: any) {
        console.error('Error signing in with email:', error);
        throw new Error(error.message || 'Failed to sign in with email');
    }
};

/**
 * Create a new user with email and password
 */
export const registerWithEmail = async (
    email: string,
    password: string,
    displayName?: string
): Promise<UserCredential> => {
    try {
        if (!auth) throw new Error("Firebase Auth not initialized");
        const result = await createUserWithEmailAndPassword(auth, email, password);

        // Update profile with display name if provided
        if (displayName && result.user) {
            await updateProfile(result.user, { displayName });
        }

        return result;
    } catch (error: any) {
        console.error('Error registering with email:', error);
        throw new Error(error.message || 'Failed to register with email');
    }
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string): Promise<void> => {
    try {
        if (!auth) throw new Error("Firebase Auth not initialized");
        await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
        console.error('Error sending password reset email:', error);
        throw new Error(error.message || 'Failed to send password reset email');
    }
};

/**
 * Update user profile
 */
export const updateUserProfile = async (updates: {
    displayName?: string;
    photoURL?: string;
}): Promise<void> => {
    try {
        if (!auth || !auth.currentUser) {
            throw new Error('No user is currently signed in');
        }
        await updateProfile(auth.currentUser, updates);
    } catch (error: any) {
        console.error('Error updating profile:', error);
        throw new Error(error.message || 'Failed to update profile');
    }
};

/**
 * Sign out the current user
 */
export const logout = async (): Promise<void> => {
    try {
        if (!auth) return;
        await signOut(auth);
    } catch (error: any) {
        console.error('Error signing out:', error);
        throw new Error(error.message || 'Failed to sign out');
    }
};

/**
 * Delete the current user
 */
export const deleteCurrentUser = async (): Promise<void> => {
    try {
        if (!auth || !auth.currentUser) {
            throw new Error('No user is currently signed in');
        }
        await deleteUser(auth.currentUser);
    } catch (error: any) {
        console.error('Error deleting user:', error);
        throw new Error(error.message || 'Failed to delete user');
    }
};

/**
 * Get the current user
 */
export const getCurrentUser = (): User | null => {
    if (!auth) return null;
    const user = auth.currentUser;
    return user ? convertFirebaseUser(user) : null;
};

/**
 * Get the Firebase auth instance
 */
export const getAuthInstance = () => auth;

/**
 * Subscribe to auth state changes
 * Returns an unsubscribe function
 */
export const onAuthStateChange = (
    callback: (user: User | null) => void
): (() => void) => {
    if (!auth) return () => { };
    return onAuthStateChanged(auth, (firebaseUser) => {
        const user = firebaseUser ? convertFirebaseUser(firebaseUser) : null;
        callback(user);
    });
};

/**
 * Get the current user's ID token
 * Useful for authenticating with your backend
 */
export const getIdToken = async (forceRefresh = false): Promise<string | null> => {
    try {
        if (!auth || !auth.currentUser) {
            return null;
        }
        return await auth.currentUser.getIdToken(forceRefresh);
    } catch (error: any) {
        console.error('Error getting ID token:', error);
        throw new Error(error.message || 'Failed to get ID token');
    }
};

// Export the Firebase auth service
export const firebaseAuthService = {
    signInWithGoogle,
    signInWithGoogleRedirect,
    handleRedirectResult,
    signInWithEmail,
    registerWithEmail,
    resetPassword,
    updateUserProfile,
    logout,
    deleteCurrentUser,
    getCurrentUser,
    getAuthInstance,
    onAuthStateChange,
    getIdToken,
};
