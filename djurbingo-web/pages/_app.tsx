import "../styles/globals.css";
import type { AppProps } from "next/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDQbzbuLJWvXthFOs8dt9QgmQgmiEUvciM",
  authDomain: "djurbingo.firebaseapp.com",
  projectId: "djurbingo",
  storageBucket: "djurbingo.appspot.com",
  messagingSenderId: "346194806348",
  appId: "1:346194806348:web:e6980a03546aacdf2816e9",
  measurementId: "G-7XJN4VSV62",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
