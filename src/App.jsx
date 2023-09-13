import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import Cities from './pages/Cities';
import DetailCity from './pages/DetailCity';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { authenticate, login } from './actions/authActions.js';
import axios from 'axios';
import Componente404 from './pages/Componente404';
import { LS } from './LS';
import ProtectedRouter from './layouts/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: 
          <Home />,
      },
      {
        path: '/cities',
        element: <Cities />,
      },
      {
        path: '/cities/:id',
        element: <DetailCity />,
      },
      {
        path: '/signin',
        element: <ProtectedRouter>
          <Signin />
          </ProtectedRouter>,
      },
      {
        path: '/signup',
        element: <ProtectedRouter>
          <Signup />
        </ProtectedRouter>,
      }, 
      {
        path: '*',
        element: <Componente404 />,
      },
    ],
  },
]);

function App() { 
  const dispatch = useDispatch();
 
  useEffect(() => {
    const token = LS.getText('token');
    if (token) {
      dispatch(authenticate());
    }
  }, [dispatch]);  

  /* useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);
      const infoUser = jwtDecode(credentialResponse.credential)
      const userData = {
        email: infoUser.email,
        password: "Mytinerary1234",
      }
      const res = await axios.post('http://localhost:1212/api/auth/in', userData);
      console.log(res);
      dispatch(login(res.data))

    },
    onError: () => {
      console.log('Login Failed');
    },
  }); */

  return (
    <RouterProvider router={router} />
  );
}

export default App;