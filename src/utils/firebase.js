// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_aaMsO-aZpKiWkGzelv3k_JcEPNmzBAQ",
  authDomain: "filmygpt-9eeb6.firebaseapp.com",
  projectId: "filmygpt-9eeb6",
  storageBucket: "filmygpt-9eeb6.firebasestorage.app",
  messagingSenderId: "641897123693",
  appId: "1:641897123693:web:bf579ef79190f027795464",
  measurementId: "G-V0RNGHLXXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();