import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDuLwCCaIvLAi6XCF0zghwK0eoqro2wVsw",
  authDomain: "udevs-ecccd.firebaseapp.com",
  databaseURL: "https://udevs-ecccd-default-rtdb.firebaseio.com",
  projectId: "udevs-ecccd",
  storageBucket: "udevs-ecccd.appspot.com",
  messagingSenderId: "409824695867",
  appId: "1:409824695867:web:d518b015a333a61a23ae1e",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const database = ref(getDatabase(app)) 
export const storage = getStorage()
// export default firedb.database().ref()