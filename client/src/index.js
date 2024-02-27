import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //commented to remove the USER_LOADED msg giving twice ..will uncommnent when the test is done
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

