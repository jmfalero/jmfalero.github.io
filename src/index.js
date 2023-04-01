import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZBh0dttTpKTB9h_bg7OSNj8W4PbQV54",
  authDomain: "performancefirst-45130.firebaseapp.com",
  projectId: "performancefirst-45130",
  storageBucket: "performancefirst-45130.appspot.com",
  messagingSenderId: "414103511097",
  appId: "1:414103511097:web:5ef8378fa1b38c8c71ede8"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

