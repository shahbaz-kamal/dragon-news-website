// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU6jzoIpsQzjyvdjhP5OnH0y8vPsyiuMo",
  authDomain: "dragon-news-2babe.firebaseapp.com",
  projectId: "dragon-news-2babe",
  storageBucket: "dragon-news-2babe.firebasestorage.app",
  messagingSenderId: "172608690371",
  appId: "1:172608690371:web:81bb101b7a3026beebaa76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
