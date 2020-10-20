import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_Vkffz9ly1Zhielz7oC4EEOCKARldpGk",
  authDomain: "rishaan-edu.firebaseapp.com",
  databaseURL: "https://rishaan-edu.firebaseio.com",
  projectId: "rishaan-edu",
  storageBucket: "rishaan-edu.appspot.com",
  messagingSenderId: "711667068681",
  appId: "1:711667068681:web:10a5a14f0cc3d32d73add8",
  measurementId: "G-E21ENBKJ34",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
