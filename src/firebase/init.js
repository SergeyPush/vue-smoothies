import firebase from "firebase/app";
import firestore from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqSm520HEUhX4FfjY0lbm-hPHA7F2TLLM",
  authDomain: "udemy-ninja-smoothies-d237d.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-d237d.firebaseio.com",
  projectId: "udemy-ninja-smoothies-d237d",
  storageBucket: "udemy-ninja-smoothies-d237d.appspot.com",
  messagingSenderId: "840430212907",
  appId: "1:840430212907:web:271aa3afd6a0a39c26976e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore.settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
