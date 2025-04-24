import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Setting up auth state listener...');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user ? `User logged in: ${user.email}` : 'No user');
      setUser(user);
      setLoading(false);
    }, (error) => {
      console.error('Auth state change error:', error);
    });

    return () => {
      console.log('Cleaning up auth state listener...');
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      console.log('Attempting Google sign in...');
      // Check if auth is initialized
      if (!auth) {
        throw new Error('Auth service not initialized');
      }
      
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google sign in successful:', result.user.email);
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      
      // Handle specific error cases
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          console.log('User closed the popup');
          break;
        case 'auth/cancelled-popup-request':
          console.log('Multiple popup requests were made');
          break;
        case 'auth/popup-blocked':
          console.log('Popup was blocked by the browser');
          break;
        case 'auth/configuration-not-found':
          console.error('Firebase configuration error. Please check your Firebase project settings.');
          break;
        case 'auth/unauthorized-domain':
          console.error('This domain is not authorized for OAuth operations.');
          break;
        default:
          console.error('Unknown error:', error.message);
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      console.log('Attempting to sign out...');
      await signOut(auth);
      console.log('Sign out successful');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};