import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../../seed";

// we need to somehow seed the database before

// we need config here
const config = {
  apiKey: "AIzaSyBK6QGlImy7ZmKFZm2d1teoho3teZMzNLo",
  authDomain: "netflix-bcbb6.firebaseapp.com",
  databaseURL: "https://netflix-bcbb6.firebaseio.com",
  projectId: "netflix-bcbb6",
  storageBucket: "netflix-bcbb6.appspot.com",
  messagingSenderId: "576674943937",
  appId: "1:576674943937:web:d2b9b7b7bf811657c61540",
};

export const firebase = Firebase.initializeApp(config);
