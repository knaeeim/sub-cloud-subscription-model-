// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDNnxxoqaVU3EYnWyBK9Wg79xaogi3HKY",
  authDomain: "sub-cloud.firebaseapp.com",
  projectId: "sub-cloud",
  storageBucket: "sub-cloud.firebasestorage.app",
  messagingSenderId: "604662912561",
  appId: "1:604662912561:web:e3aa9a63399e050ddce710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);