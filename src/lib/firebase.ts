import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-wdMNNZ0hoxU9_MRpKePzYy6NrFcqtus",
  authDomain: "pandeyresidency-83371.firebaseapp.com",
  projectId: "pandeyresidency-83371",
  storageBucket: "pandeyresidency-83371.firebasestorage.app",
  messagingSenderId: "952909892996",
  appId: "1:952909892996:web:a36717a932e1557c7ee1d1",
};

if (!firebaseConfig.projectId) {
  throw new Error(
    'Missing Firebase config. Add Firebase env vars to .env or .env.local.'
  );
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
