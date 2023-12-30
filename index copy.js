// const CommonUrl = "https://ksfirebase2023-default-rtdb.asia-southeast1.firebasedatabase.app/";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

// import { initializeApp } from CommonUrl;

import {
    getDatabase,
    ref,
    get,
    set,
    child,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// import {
//     getDatabase,
//     ref,
//     get,
//     set,
//     child,
// } from CommonUrl;

// Replace this with your config object from your firebase console
// Find yours under Project Settings > General > Your apps > SDK Setup and configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-VPw13iiM0JrbTeQOQHP1FZUdFJ_qw0k",
    authDomain: "ksfirebase2023.firebaseapp.com",
    databaseURL: "https://ksfirebase2023-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ksfirebase2023",
    storageBucket: "ksfirebase2023.appspot.com",
    messagingSenderId: "572654523972",
    appId: "1:572654523972:web:a08e0a75b43794e9138e11",
    measurementId: "G-71L88R48DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let kval = db.get("name");
console.log("db : ", db,kval);
// Attach firebase to the window so we can access it from the browser console
window.firebase = {
    getDatabase: getDatabase,
    ref: ref,
    get: get,
    set: set,
    child: child,
};