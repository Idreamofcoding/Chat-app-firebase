// import React from 'react';
// import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBTdgzwSg84QCP2rXl3ag94md2wr--5jQg",
    authDomain: "chat-app-december2021.firebaseapp.com",
    projectId: "chat-app-december2021",
    storageBucket: "chat-app-december2021.appspot.com",
    messagingSenderId: "831715990417",
    appId: "1:831715990417:web:4b7f3d0a4d6dbe1ea81830"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;