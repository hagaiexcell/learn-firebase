import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjzdfZjRX9oo8wvK9WdR8M_ikUy0GOVfc",
  authDomain: "fir-tutorial-8b695.firebaseapp.com",
  projectId: "fir-tutorial-8b695",
  storageBucket: "fir-tutorial-8b695.appspot.com",
  messagingSenderId: "426656728099",
  appId: "1:426656728099:web:f9ea2e4c1829d700ed9d96",
  measurementId: "G-52552XJHZL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
