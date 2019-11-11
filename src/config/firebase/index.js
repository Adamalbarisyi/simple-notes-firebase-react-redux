import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; 


const firebaseConfig = {
    apiKey: "AIzaSyAYihwLS4N8pF-2Ytp4SUsRtPtPk10x_WQ",
    authDomain: "simple-notes-firebase-2d5d5.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-2d5d5.firebaseio.com",
    projectId: "simple-notes-firebase-2d5d5",
    storageBucket: "simple-notes-firebase-2d5d5.appspot.com",
    messagingSenderId: "400739010302",
    appId: "1:400739010302:web:8cbd6c25122f761d73c7af",
    measurementId: "G-GGZXFEMH1Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export const database = firebase.database();

export default firebase;