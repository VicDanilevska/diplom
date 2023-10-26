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
const servicesCollection = collection(db, 'services');

const commonUserAvatarImageUrl = 'https://firebasestorage.googleapis.com/v0/b/my-diplom-10e3f.appspot.com/o/CommonFiles%2FCommonAvatarImage.png?alt=media&token=c30ce89f-52a8-4e17-8f35-91bec45f2b2c&_gl=1*bu90zt*_ga*MTE1MDIyNjY4OC4xNjk2ODc1MjQy*_ga_CW55HF8NVT*MTY5ODE0NTI1MC4xMy4xLjE2OTgxNDUzODQuNDYuMC4w';


export {auth, usersCollection, commonUserAvatarImageUrl, db, servicesCollection};