import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/my_reset.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// reportWebVitals();
