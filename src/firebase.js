import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDkTufV3_DHgeaLBEd_CVoa4jt5g76ZOgQ",
  authDomain: "todo-e483d.firebaseapp.com",
  databaseURL: "https://todo-e483d.firebaseio.com",
  projectId: "todo-e483d",
  storageBucket: "todo-e483d.appspot.com",
  messagingSenderId: "462366219459",
  appId: "1:462366219459:web:649b9c5e20374498af1676"
});

const db = firebaseApp.firestore();

export { db };