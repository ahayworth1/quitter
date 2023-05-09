import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIHEd24KagMbzmIL3OqK_gd0oeRreNtEc",
  authDomain: "quitter2-5daf3.firebaseapp.com",
  projectId: "quitter2-5daf3",
  storageBucket: "quitter2-5daf3.appspot.com",
  messagingSenderId: "1071170439591",
  appId: "1:1071170439591:web:10c37782a7cc1a1d818e82"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
