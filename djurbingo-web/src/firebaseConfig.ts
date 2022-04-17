import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQbzbuLJWvXthFOs8dt9QgmQgmiEUvciM",
  authDomain: "djurbingo.firebaseapp.com",
  projectId: "djurbingo",
  storageBucket: "djurbingo.appspot.com",
  messagingSenderId: "346194806348",
  appId: "1:346194806348:web:e6980a03546aacdf2816e9",
  measurementId: "G-7XJN4VSV62",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);
