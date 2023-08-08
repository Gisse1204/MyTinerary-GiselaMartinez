import React from 'react';
import './App.css'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {

  return (

    <MainLayout>
        <Home/> 
    </MainLayout>
  )
}

export default App