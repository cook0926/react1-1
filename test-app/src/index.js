import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import Library from './boox(03.27)/Library';
<<<<<<< HEAD
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {
  root.render(
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
>>>>>>> 999ea860790f062fa7ebb66d8d89a2e9313ce94a
  <React.StrictMode>
    <App />
    <Hello toWhat="World" />
    <Library/>
<<<<<<< HEAD
    <Clock/>
  </React.StrictMode>
);
}, 1000)

=======
  </React.StrictMode>
);
>>>>>>> 999ea860790f062fa7ebb66d8d89a2e9313ce94a

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
