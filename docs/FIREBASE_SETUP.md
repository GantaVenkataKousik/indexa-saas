# Firebase Google Authentication Setup Guide

This guide will help you set up Google Authentication with Firebase for the Indexa platform.

## 📋 Prerequisites

- Firebase account (free tier works fine)
- Google Cloud Platform account (automatic with Firebase)

## 🚀 Setup Instructions

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter your project name (e.g., "Indexa")
4. (Optional) Enable Google Analytics
5. Click **"Create project"**

### Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **web icon (</>)** to add a web app
2. Give your app a nickname (e.g., "Indexa Web App")
3. Check **"Also set up Firebase Hosting"** (optional)
4. Click **"Register app"**
5. Copy the Firebase configuration object

### Step 3: Get Your Firebase Configuration

You'll see a configuration object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};
```

### Step 4: Enable Google Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Click on **Google** in the providers list
3. Toggle **Enable**
4. Select a support email from the dropdown
5. Click **Save**

### Step 5: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 6: Configure Authorized Domains

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Add your domains:
   - `localhost` (already added by default)
   - Your production domain (e.g., `indexa.com`)
   - Your Vercel preview domains (e.g., `*.vercel.app`)

### Step 7: Test Your Setup

1. Run your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to `/sign-in`
3. Click **"Continue with Google"**
4. You should see the Google sign-in popup

## 📦 What's Included

### Files Created

- **`lib/firebase.ts`** - Firebase initialization and configuration
- **`services/firebase-auth.ts`** - Authentication service with all methods
- **`hooks/use-auth.ts`** - React hook for authentication state
- **`app/components/auth-provider.tsx`** - Context provider for authentication
- **`app/components/google-auth.tsx`** - Sign-in/Sign-up component with Google
- **`app/components/protected-route.tsx`** - Route protection component
- **`.env.local.example`** - Environment variables template

### Available Features

✅ Google Sign-In (Popup & Redirect)
✅ Email/Password Authentication
✅ User Registration
✅ Password Reset
✅ Profile Updates
✅ Sign Out
✅ Protected Routes
✅ Auth State Persistence
✅ ID Token Generation

## 🎯 Usage Examples

### Using the Auth Hook

```tsx
'use client';

import { useAuthContext } from '@/app/components/auth-provider';

export default function MyComponent() {
  const { user, loading, signInWithGoogle, logout } = useAuthContext();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <button onClick={signInWithGoogle}>Sign In with Google</button>;
  }

  return (
    <div>
      <p>Welcome, {user.name || user.email}!</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}
```

### Protecting Routes

```tsx
'use client';

import { ProtectedRoute } from '@/app/components/protected-route';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

### Getting ID Token for API Calls

```tsx
import { useAuthContext } from '@/app/components/auth-provider';

export default function MyComponent() {
  const { getIdToken } = useAuthContext();

  const callAPI = async () => {
    const token = await getIdToken();
    
    const response = await fetch('/api/protected', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  };

  return <button onClick={callAPI}>Call Protected API</button>;
}
```

## 🔒 Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use environment variables** for all sensitive data
3. **Verify ID tokens** on your backend for protected API routes
4. **Set up Firebase Security Rules** for Firestore and Storage
5. **Enable App Check** for production (optional but recommended)

## 🛠️ Troubleshooting

### "Firebase: Error (auth/popup-blocked)"
- The browser blocked the popup. Use redirect method instead:
  ```tsx
  await signInWithGoogleRedirect();
  ```

### "Firebase: Error (auth/unauthorized-domain)"
- Add your domain to Firebase Console > Authentication > Settings > Authorized domains

### "Module not found: Can't resolve '@/lib/firebase'"
- Make sure you've created the `.env.local` file with your Firebase config
- Restart your development server

### Authentication state not persisting
- Firebase automatically persists auth state in localStorage
- Clear browser cache and cookies if issues persist

## 📚 Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Next.js with Firebase Guide](https://firebase.google.com/docs/auth/web/start)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

## 🎨 Customization

### Customize Google Sign-In Button

Edit `app/components/google-auth.tsx`:

```tsx
<Button
  onClick={handleGoogleSignIn}
  className="your-custom-classes"
>
  Your Custom Button Text
</Button>
```

### Add Additional OAuth Providers

1. Enable provider in Firebase Console
2. Add provider to `services/firebase-auth.ts`:

```typescript
import { GithubAuthProvider } from 'firebase/auth';

const githubProvider = new GithubAuthProvider();

export const signInWithGithub = async () => {
  return await signInWithPopup(auth, githubProvider);
};
```

## 💡 Next Steps

1. ✅ Set up Firebase project
2. ✅ Configure environment variables
3. ✅ Test Google authentication
4. 📝 Implement protected routes in your app
5. 🔐 Set up backend API authentication with ID tokens
6. 🗄️ Add Firestore for user data storage
7. 📧 Implement email verification
8. 👤 Create user profile management

---

**Need help?** Check the Firebase documentation or open an issue in the repository.
