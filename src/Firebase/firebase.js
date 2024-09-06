import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJDKc3zPT4b9ETcQZVwV39qYyM4v_E8rA",
  authDomain: "fithublogin.firebaseapp.com",
  projectId: "fithublogin",
  storageBucket: "fithublogin.appspot.com",
  messagingSenderId: "558208411569",
  appId: "1:558208411569:web:b5830bc40d7740ec5ebf90",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
