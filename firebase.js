// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHTOu07vwl0pFCBGqguuDvQnw50XbOycw",
    authDomain: "uber-nextjs-clone-b9057.firebaseapp.com",
    projectId: "uber-nextjs-clone-b9057",
    storageBucket: "uber-nextjs-clone-b9057.appspot.com",
    messagingSenderId: "670448780374",
    appId: "1:670448780374:web:71606c0169c1ce3da167f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth();

export { app, provider, auth }