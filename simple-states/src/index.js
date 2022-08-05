import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App.js";
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

setInterval(tick, 1000);

reportWebVitals();
