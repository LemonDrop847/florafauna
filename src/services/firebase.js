// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzirlXcAIFdG4p-RoVpf2qfRV9kPhc3RA",
  authDomain: "florafauna-87bfd.firebaseapp.com",
  projectId: "florafauna-87bfd",
  storageBucket: "florafauna-87bfd.appspot.com",
  messagingSenderId: "1750840249",
  appId: "1:1750840249:web:c07723a5d4611ec008fc68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app,auth,db,storage};