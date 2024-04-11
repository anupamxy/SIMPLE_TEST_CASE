import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}from 'react-router-dom'
import { AuthProvider } from './components/context/auth';
import { SearchProvider } from './components/context/search';
import { CartProvider } from './components/context/cart';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain="freetestcase.us.auth0.com"
  clientId="ZSUeSZTDZDwYH4wiUZZ4GFPkpxynw26v"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}

  >
<AuthProvider>
  <SearchProvider>
    <CartProvider>
  <BrowserRouter>
    <App />
     </BrowserRouter>
    </CartProvider>
   
    </SearchProvider>
  </AuthProvider>
  </Auth0Provider>
  
);


reportWebVitals();
