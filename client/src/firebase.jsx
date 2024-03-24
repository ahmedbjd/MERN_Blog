// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8620c.firebaseapp.com",
  projectId: "mern-blog-8620c",
  storageBucket: "mern-blog-8620c.appspot.com",
  messagingSenderId: "546314137140",
  appId: "1:546314137140:web:665e738aa3287ab0302461"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);