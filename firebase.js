// Import the functions you need from the SDKs you need
import {
     getApp,
     getApps,
     initializeApp
} from "firebase/app";
import {
     getFirestore
} from "firebase/firestore";
import {
     getStorage
} from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDLEzjf_Z0z0yE_qJ8PDg3BjCb6aLx_C-4",
     authDomain: "twitter-clone-mui.firebaseapp.com",
     projectId: "twitter-clone-mui",
     storageBucket: "twitter-clone-mui.appspot.com",
     messagingSenderId: "517248368306",
     appId: "1:517248368306:web:b8f8f86d75767c45f293ab",
     measurementId: "G-GWMBL0PVK2"
   };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {
     db,
     storage
};

