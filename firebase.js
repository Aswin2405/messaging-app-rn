import * as firebase from 'firebase';
// Optionally import the services that you want to use
import "firebase/firestore";
import "firebase/auth";
//import "firebase/database";

//import "firebase/functions";
//import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCcXAXUNOKXa76awZ2jcmrgxT6xu_nsM9I",
  authDomain: "signal-clone-6a084.firebaseapp.com",
  projectId: "signal-clone-6a084",
  storageBucket: "signal-clone-6a084.appspot.com",
  messagingSenderId: "305727315115",
  appId: "1:305727315115:web:28aa982107741376876bee"
};
  let app
  if(firebase.apps.length===0){
      app=firebase.initializeApp(firebaseConfig)
  }else{
      app=firebase.app()
  }
  const db=app.firestore()
  const auth=firebase.auth()
  export {db,auth} 