import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase,ref, get,set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getDatabase } from "firebase/database";


console.log("getDatabase : ", getDatabase);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
// const database = app.database();

const database = getDatabase(app);
//const dataRef = database.ref("Name");
const dataRef = ref(database, 'Name');
const dataRef1 = ref(database, 'Mobile');

get(dataRef)
.then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log(data);
  } else {
    console.log('No data available');
  }
})
.catch((error) => {
  console.error('Error fetching data:', error);
});

const newData = { message: 'Hello, Firebase!' };
    set(dataRef1, newData)
      .then(() => {
        console.log('Data written successfully.');
      })
      .catch((error) => {
        console.error('Error writing data:', error);
      });


console.log("analytics : ", analytics, database,dataRef);