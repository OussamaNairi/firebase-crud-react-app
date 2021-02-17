
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyByaa1V5B8Zs-thfKvhNsnmRfewqQLIcUQ",
    authDomain: "react-crud-32838.firebaseapp.com",
    databaseURL: "https://react-crud-32838-default-rtdb.firebaseio.com",
    projectId: "react-crud-32838",
    storageBucket: "react-crud-32838.appspot.com",
    messagingSenderId: "489222862469",
    appId: "1:489222862469:web:5322a13e41cb699b089bec"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
