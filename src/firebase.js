import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWVuGXIu17amuewJ2-XJS1ixsFde5tmSI",
  authDomain: "webchat-f2208.firebaseapp.com",
  projectId: "webchat-f2208",
  storageBucket: "webchat-f2208.appspot.com",
  messagingSenderId: "921254029272",
  appId: "1:921254029272:web:d395dd0ceced670d05b4ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore();
