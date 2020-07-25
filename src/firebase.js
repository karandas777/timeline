import firebase from "firebase/app";
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyAyrwAarVZBoSNmUJVOWLcnhwxl-9yRwsk",
    authDomain: "timeline-e610b.firebaseapp.com",
    databaseURL: "https://timeline-e610b.firebaseio.com",
    projectId: "timeline-e610b",
    storageBucket: "timeline-e610b.appspot.com",
    messagingSenderId: "266379204392",
    appId: "1:266379204392:web:6f3b6b0e73efd6bef0e21d"
  };
  // Initialize Firebase
var firedb = firebase.initializeApp(firebaseConfig);

export default firedb.storage().ref();