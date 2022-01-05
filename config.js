import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCfpTnLdHWdcZcLnr8QIAJbgn_fbaG6LfY",
    authDomain: "e-library-a6e81.firebaseapp.com",
    projectId: "e-library-a6e81",
    storageBucket: "e-library-a6e81.appspot.com",
    messagingSenderId: "1023812860574",
    appId: "1:1023812860574:web:967db5c37a6683c975598f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();