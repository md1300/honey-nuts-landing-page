// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7aOrzYyVT-8ffT-Zc0TYKxhj5zHGuPf0",
  authDomain: "honey-landing-page-project.firebaseapp.com",
  projectId: "honey-landing-page-project",
  storageBucket: "honey-landing-page-project.appspot.com",
  messagingSenderId: "529895715158",
  appId: "1:529895715158:web:3a060879665fb6839de6f7"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export default  app