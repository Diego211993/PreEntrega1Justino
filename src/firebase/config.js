

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwcZPcOzlOW7g0zb-0-PuUrReHbIG4Lhw",
    authDomain: "rj-39585-10ead.firebaseapp.com",
    projectId: "rj-39585-10ead",
    storageBucket: "rj-39585-10ead.appspot.com",
    messagingSenderId: "611019366915",
    appId: "1:611019366915:web:7a059c377b7c168de56436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)