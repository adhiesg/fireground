const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore")
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZGzeVBSVA796pwOq-lyGd0VzGoWY3EaI",
  authDomain: "fir-test-4a39c.firebaseapp.com",
  projectId: "fir-test-4a39c",
  storageBucket: "fir-test-4a39c.appspot.com",
  messagingSenderId: "135102094004",
  appId: "1:135102094004:web:5f38051af0e25c053a55e1",
  measurementId: "G-66CWTHE15N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fs = getFirestore()



module.exports = {fs, firebaseConfig}