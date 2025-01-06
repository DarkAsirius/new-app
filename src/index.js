import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCccZbbK5z7yGk05eiZnWAGs5PMKM9t-G4",
  authDomain: "na-zare.firebaseapp.com",
  projectId: "na-zare",
  storageBucket: "na-zare.firebasestorage.app",
  messagingSenderId: "762125239584",
  appId: "1:762125239584:web:32a7e1e12c75d446be8345",
  measurementId: "G-FPNXFS1XL8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
