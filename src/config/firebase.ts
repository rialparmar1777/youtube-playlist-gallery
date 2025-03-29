// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGKdoVDEfIlLUejNh8h7ydrCFzh5ZZ6Xc",
  authDomain: "clone-8ba0a.firebaseapp.com",
  projectId: "clone-8ba0a",
  storageBucket: "clone-8ba0a.firebasestorage.app",
  messagingSenderId: "432803330209",
  appId: "1:432803330209:web:c11080c5fac475f355d8e0"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error("Error initializing Firebase:", error);
  throw error;
}

// Initialize Firebase services
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account',
  // Add these scopes if needed
  scope: 'profile email'
});

// Add error handling for auth initialization
try {
  console.log('Auth service initialized');
} catch (error) {
  console.error('Error initializing auth service:', error);
  throw error;
}

export { auth, googleProvider, db, storage };
