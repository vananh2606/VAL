// Import the functions you need from the SDKs you need
import { iinitalizeApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9rDWcHVJ_qPhq41Cs0gxVTBEMBySssRA",
    authDomain: "auth-7e5f2.firebaseapp.com",
    projectId: "auth-7e5f2",
    storageBucket: "auth-7e5f2.appspot.com",
    messagingSenderId: "839652881131",
    appId: "1:839652881131:web:2658e62f476bcdf80604ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
