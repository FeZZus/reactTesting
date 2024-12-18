import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// THis is where react injects the code into the HTML code
// The HTML remains otherwise unchanged 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);