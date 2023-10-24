import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Q4k0OEaxE4GPl8ZhetwfkfT0P6gOejs",
    authDomain: "my-diplom-10e3f.firebaseapp.com",
    projectId: "my-diplom-10e3f",
    storageBucket: "my-diplom-10e3f.appspot.com",
    messagingSenderId: "889973681865",
    appId: "1:889973681865:web:9882d1f488a4ae23a6e718"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const usersCollection = collection(db, 'users');

export {auth, usersCollection};