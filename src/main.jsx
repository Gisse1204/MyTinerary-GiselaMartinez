import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import store from './store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider clientId='575605148882-k8q57sej80fh7bb6qamt1575autuvdjb.apps.googleusercontent.com'>
      <App />
      <ToastContainer
        //position="top-right"
        //autoClose={5000}
        //hideProgressBar={false}
        //newestOnTop={false}
        //closeOnClick
        //pauseOnFocusLoss
        //draggable
        //pauseOnHover
        //theme="dark"
        />
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
)