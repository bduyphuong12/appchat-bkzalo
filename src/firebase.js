// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFvHF39ng1wCisxH4qTeiY-x4Cnd_Hwpc",
  authDomain: "react-chat-app-fc11a.firebaseapp.com",
  projectId: "react-chat-app-fc11a",
  storageBucket: "react-chat-app-fc11a.appspot.com",
  messagingSenderId: "316486588458",
  appId: "1:316486588458:web:88f8723bdffce9cb674b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
