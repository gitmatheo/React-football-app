import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAL4QV_MN9D9O1Kx82-XD4L0gi5BroVD2o",
  authDomain: "m-city-f1280.firebaseapp.com",
  databaseURL: "https://m-city-f1280.firebaseio.com",
  projectId: "m-city-f1280",
  storageBucket: "m-city-f1280.appspot.com",
  messagingSenderId: "158393410555"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
