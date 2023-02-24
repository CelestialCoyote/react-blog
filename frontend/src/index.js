import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import './index.css';


const firebaseConfig = {
  apiKey: "AIzaSyC1K0Vx3cM_GxkAtfZYhhKi41g6MT7hcRQ",
  authDomain: "react-blog-5e0cd.firebaseapp.com",
  projectId: "react-blog-5e0cd",
  storageBucket: "react-blog-5e0cd.appspot.com",
  messagingSenderId: "252781506866",
  appId: "1:252781506866:web:521920152697535666a72b"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
