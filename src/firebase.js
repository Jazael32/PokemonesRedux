import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWeGOPT4AyLNrV7haWRPsfAIyo35TczRY",
    authDomain: "crud-udemy-react-9dbe0.firebaseapp.com",
    projectId: "crud-udemy-react-9dbe0",
    storageBucket: "crud-udemy-react-9dbe0.appspot.com",
    messagingSenderId: "530249175855",
    appId: "1:530249175855:web:c7edf871d30b616d43c7da"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth, firebase}

