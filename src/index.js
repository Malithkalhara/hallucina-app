import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import "./assets/css/font-awesome.css";
// import "./assets/css/jquery.smartmenus.bootstrap.css"
// import "./assets/css/jquery.simpleLens.css"
// import "./assets/css/slick.css"
// import "./assets/css/nouislider.css"
// import "./assets/css/theme-color/default-theme.css"
// import "./assets/css/sequence-theme.modern-slide-in.css"
// import "./assets/css/style.css"
// import "./assets/css/theme-color/default-theme.css"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
