import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//comment the strictmode when testing to avoid the USER_LOADED msg giving twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

