// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr8Aev2u0J4SRd53izcBsNj5NzMYsnPvI",
  authDomain: "notebook-89097.firebaseapp.com",
  projectId: "notebook-89097",
  storageBucket: "notebook-89097.appspot.com",
  messagingSenderId: "276123277710",
  appId: "1:276123277710:web:1071ac82b8ab2d28cbecdf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
