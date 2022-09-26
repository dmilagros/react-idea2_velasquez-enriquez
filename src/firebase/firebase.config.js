// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDjr8fMwNef4s0Q5Hnqe0EYdCYP6NbpsKM",
  authDomain: "fashion-store-af284.firebaseapp.com",
  projectId: "fashion-store-af284",
  storageBucket: "fashion-store-af284.appspot.com",
  messagingSenderId: "757860079866",
  appId: "1:757860079866:web:d878a2877fe006a1c21143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
	db
}