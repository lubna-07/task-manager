// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-cbc0f.firebaseapp.com",
  projectId: "taskmanager-cbc0f",
  storageBucket: "taskmanager-cbc0f.appspot.com",
  messagingSenderId: "920690213490",
  appId: "1:920690213490:web:32beca8cf4ab1d3a9b38eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);