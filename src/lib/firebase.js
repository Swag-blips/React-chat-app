// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chat-app-8f0e3.firebaseapp.com",
    projectId: "chat-app-8f0e3",
    storageBucket: "chat-app-8f0e3.appspot.com",
    messagingSenderId: "740734753493",
    appId: "1:740734753493:web:1061280d803b976fb2e05c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()