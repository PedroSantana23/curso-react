import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBH1tRiOb8JaDQ-CTTzo82HiQpV1OpEu4k",
  authDomain: "mini-blog-b0825.firebaseapp.com",
  projectId: "mini-blog-b0825",
  storageBucket: "mini-blog-b0825.firebasestorage.app",
  messagingSenderId: "616784287209",
  appId: "1:616784287209:web:226a39c9bb4431740a6778"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
const auth = getAuth(app);
 
export { db, auth };