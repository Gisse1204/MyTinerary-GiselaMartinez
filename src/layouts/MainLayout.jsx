import React, { useEffect } from 'react';
import Header from './../components/Header';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Footer from './../components/Footer';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === '/') navigate('/home');
  });

  return (
    <div className='flex flex-col justify-between'>
      <Header />
      <div>
        <Outlet />
      </div>
       <Footer/>   
    </div>       
  );
};

export default MainLayout;