import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ZG7FvSF8_u3smNVX4RoWlhl8Z-weg1g",
  authDomain: "empa-b8f4b.firebaseapp.com",
  projectId: "empa-b8f4b",
  storageBucket: "empa-b8f4b.appspot.com",
  messagingSenderId: "748440507758",
  appId: "1:748440507758:web:275205f61f3c4c4b399d7f",
  measurementId: "G-MB182TVZ7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error during sign-in: ${errorCode} - ${errorMessage}`);
      throw error;
    });
};

export const setupAuthListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};