import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <Auth0Provider
    domain="dev-w-qnmagy.us.auth0.com"
    clientId="R93e9qUAwRl9YpgvaR5b3MeDT2uu5Egv"
    redirectUri="http://localhost:3000/home"
  >
    <App />
    </Auth0Provider>
    </React.StrictMode>

);

reportWebVitals();
