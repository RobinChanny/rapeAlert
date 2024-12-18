// Import the necessary functions from Firebase SDK
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8U-prydc3rGpxyAMYCNnbFyBT8kKTiyk",
  authDomain: "rapealert-b010e.firebaseapp.com",
  projectId: "rapealert-b010e",
  storageBucket: "rapealert-b010e.appspot.com", // Corrected the storage URL
  messagingSenderId: "880967492048",
  appId: "1:880967492048:web:61c51c81607bb6565099d5",
  measurementId: "G-YBB025E4MF",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore: Firestore = getFirestore(app);

// Initialize Analytics (optional, only if supported)
let analytics: Analytics | null = null;
if (typeof window !== "undefined" && typeof window.document !== "undefined") {
  analytics = getAnalytics(app);
}

// Export the initialized Firebase services
export { app, firestore, analytics };