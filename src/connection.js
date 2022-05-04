// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgT8PGC7vBh2HnhFovEYhBSvMPMqZ14Zc",

  authDomain: "formsalida.firebaseapp.com",

  databaseURL: "https://formsalida-default-rtdb.firebaseio.com",

  projectId: "formsalida",

  storageBucket: "formsalida.appspot.com",

  messagingSenderId: "709515899539",

  appId: "1:709515899539:web:68c365b02743531c2c5366",
  
  measurementId: "G-91LGSCV229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);