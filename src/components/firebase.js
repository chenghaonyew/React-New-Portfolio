import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBcGDt3lsr929iLH6owF_BXmgHQfvmyU40",
  authDomain: "react-portfolio-92a6e.firebaseapp.com",
  projectId: "react-portfolio-92a6e",
  storageBucket: "react-portfolio-92a6e.appspot.com",
  messagingSenderId: "513590717449",
  appId: "1:513590717449:web:d359d950ea66c868f09cd8",
  measurementId: "G-L37TD2GQWZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { storage };
export default db;
