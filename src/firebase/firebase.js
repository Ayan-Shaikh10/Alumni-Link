import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCejmdQhJ8guWXTVMvvBpDPZwuOybcemKw",

  authDomain: "alumni-link-d6b44.firebaseapp.com",

  projectId: "alumni-link-d6b44",

  storageBucket: "alumni-link-d6b44.firebasestorage.app",

  messagingSenderId: "566048501452",

  appId: "1:566048501452:web:40a1d76480719dbc36dc69"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);