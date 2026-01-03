/**
 * Utility functions for Firebase authentication in API routes and server components
 */

import { auth } from '@/lib/firebase';
import { getIdToken } from '@/services/firebase-auth';

/**
 * Add Firebase ID token to API request headers
 * Use this for authenticated API calls to your backend
 */
export async function getAuthHeaders(): Promise<HeadersInit> {
    const token = await getIdToken();

    if (!token) {
        throw new Error('User is not authenticated');
    }

    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
}

/**
 * Make an authenticated API request
 * Automatically includes Firebase ID token in headers
 */
export async function authenticatedFetch(
    url: string,
    options: RequestInit = {}
): Promise<Response> {
    const headers = await getAuthHeaders();

    return fetch(url, {
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        },
    });
}

/**
 * Example: Verify Firebase ID token on the server side (Next.js API routes)
 * 
 * You'll need to install firebase-admin:
 * pnpm add firebase-admin
 * 
 * Then create a file like lib/firebase-admin.ts:
 * 
 * import * as admin from 'firebase-admin';
 * 
 * if (!admin.apps.length) {
 *   admin.initializeApp({
 *     credential: admin.credential.cert({
 *       projectId: process.env.FIREBASE_PROJECT_ID,
 *       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
 *       privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
 *     }),
 *   });
 * }
 * 
 * export const adminAuth = admin.auth();
 * 
 * // Then in your API route:
 * 
 * import { adminAuth } from '@/lib/firebase-admin';
 * import { NextRequest, NextResponse } from 'next/server';
 * 
 * export async function GET(request: NextRequest) {
 *   const authHeader = request.headers.get('authorization');
 *   
 *   if (!authHeader?.startsWith('Bearer ')) {
 *     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
 *   }
 *   
 *   const token = authHeader.split('Bearer ')[1];
 *   
 *   try {
 *     const decodedToken = await adminAuth.verifyIdToken(token);
 *     const uid = decodedToken.uid;
 *     
 *     // User is authenticated, proceed with your logic
 *     return NextResponse.json({ uid, message: 'Authenticated!' });
 *   } catch (error) {
 *     return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
 *   }
 * }
 */

/**
 * Client-side example: Making authenticated requests
 * 
 * import { authenticatedFetch } from '@/lib/auth-utils';
 * 
 * const response = await authenticatedFetch('/api/protected-endpoint', {
 *   method: 'POST',
 *   body: JSON.stringify({ data: 'your data' }),
 * });
 * 
 * const result = await response.json();
 */
