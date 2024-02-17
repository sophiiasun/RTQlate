import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyCgF_Fes6vbYraGF2CoTP0bAmHqS0Xd548",
  authDomain: "ellehacks2024-50f2b.firebaseapp.com",
  projectId: "ellehacks2024-50f2b",
  storageBucket: "ellehacks2024-50f2b.appspot.com",
  messagingSenderId: "490983780397",
  appId: "1:490983780397:web:97ae03c5119ccffca908a4",
  measurementId: "G-2RSS7J9YS3"
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