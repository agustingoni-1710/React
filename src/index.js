
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIo35DpP_-zq1bmo3jUuQu6MgEsScYaRA",
  authDomain: "mdqcaps-b3236.firebaseapp.com",
  projectId: "mdqcaps-b3236",
  storageBucket: "mdqcaps-b3236.appspot.com",
  messagingSenderId: "184042940934",
  appId: "1:184042940934:web:efd3c91bac52283e707187"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
      <App />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

