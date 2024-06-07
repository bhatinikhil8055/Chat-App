import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA_pv--Ao6fLD7zCTigx2fvow6bKJK004",
  authDomain: "webchat2001.firebaseapp.com",
  projectId: "webchat2001",
  storageBucket: "webchat2001.appspot.com",
  messagingSenderId: "368763423332",
  appId: "1:368763423332:web:bc0895fe4fc7b2af736d71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore();
