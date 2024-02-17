import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from  './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Hello From React Typescript</h1>
    <App/>
  </React.StrictMode>
);

