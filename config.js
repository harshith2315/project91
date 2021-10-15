import firebase from "firebase"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaVtXbmQ8Eno0eGEWz-z4M82dTfdEn9p4",
  authDomain: "gramma-app.firebaseapp.com",
  databaseURL: "https://gramma-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gramma-app",
  storageBucket: "gramma-app.appspot.com",
  messagingSenderId: "423880031371",
  appId: "1:423880031371:web:777a9b655e89baf83da88e"
};

const app = initializeApp(firebaseConfig);