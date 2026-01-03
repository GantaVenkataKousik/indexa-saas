'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/app/components/auth-provider';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectTo?: string;
}

/**
 * Wrapper component to protect routes that require authentication
 * Redirects to sign-in if user is not authenticated
 */
export function ProtectedRoute({ children, redirectTo = '/sign-in' }: ProtectedRouteProps) {
    const { user, loading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push(redirectTo);
        }
    }, [user, loading, router, redirectTo]);

    // Show loading state while checking authentication
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }

    // Don't render children if no user
    if (!user) {
        return null;
    }

    return <>{children}</>;
}

/**
 * Hook to check if user is authenticated
 */
export function useRequireAuth(redirectTo = '/sign-in') {
    const { user, loading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push(redirectTo);
        }
    }, [user, loading, router, redirectTo]);

    return { user, loading };
}
