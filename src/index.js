import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from "@auth0/auth0-react";
 
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    
      <SidebarProvider>
        <CoursesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CoursesProvider>
      </SidebarProvider>
  
  </Auth0Provider>
);