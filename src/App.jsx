import React from 'react';
import './App.css'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Cities from './pages/Cities';
import Componente404 from './pages/Componente404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/> ,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/cities',
        element: <Cities/>
      },
      {
        path: '/cities/:id',
        element: <Cities/>
      },
      {
        path:'*',
        element: <Componente404/>
      }
    ]
  },
 
])

function App() {

  return (
    <RouterProvider router={router}/> 
  )
}

export default App
