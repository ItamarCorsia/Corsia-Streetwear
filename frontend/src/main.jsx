import React from 'react'; // Import React library for JSX
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the app to the DOM
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import the global CSS file for styling
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for enabling routing in the app
import ShopContextProvider from './context/ShopContext.jsx'; // Import the ShopContextProvider to wrap the app with context

// Rendering the App component inside the 'root' element and wrapping it with necessary providers
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* BrowserRouter enables routing using the History API */}
    <ShopContextProvider> {/* ShopContextProvider provides global state to the entire app */}
      <App /> {/* Main App component, which contains all the pages and routing logic */}
    </ShopContextProvider>
  </BrowserRouter>, // Rendering the wrapped App inside the BrowserRouter for routing
);
