import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBWQt94uH-bWFRF83UzOiOtc85c-jg8J-4",
  authDomain: "complaint--forum.firebaseapp.com",
  projectId: "complaint--forum",
  storageBucket: "complaint--forum.appspot.com",
  messagingSenderId: "424629783208",
  appId: "1:424629783208:web:208d457f2ebac5dfb6d09d"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

