// Paste the config object from Firebase Console → Project settings → Your apps → Web app.
// This is NOT a secret — it's a public identifier. Real security comes from firestore.rules,
// not from hiding this.
// Firebase Storage isn't used — file uploads are handled as Google Drive links instead
// (Storage requires the paid Blaze plan even for free-tier usage).
export const firebaseConfig = {
  apiKey: "AIzaSyA-ca2AKFrBs4eXP6kH1JOTjnYcbXqxI0U",
  authDomain: "cfs-service-e5c91.firebaseapp.com",
  projectId: "cfs-service-e5c91",
  storageBucket: "cfs-service-e5c91.firebasestorage.app",
  messagingSenderId: "315999138939",
  appId: "1:315999138939:web:508526cf9cca95a3851ede"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
