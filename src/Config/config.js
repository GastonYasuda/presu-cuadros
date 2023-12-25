// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp9Zo7euVui9Dy4swnrqVyunct4n1VJhE",
    authDomain: "presu-cuadros.firebaseapp.com",
    projectId: "presu-cuadros",
    storageBucket: "presu-cuadros.appspot.com",
    messagingSenderId: "895870867578",
    appId: "1:895870867578:web:114655c724d34281b303c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);