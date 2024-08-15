import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
//import App from './pages/Home';
//import App from './pages/Browse';
//import App from './pages/MyReviews';
//import App from './pages/MyProfile';
//import App from './pages/Recommendations';
//import App from './pages/BookResult';
import App from './App'
import reportWebVitals from './reportWebVitals';


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
