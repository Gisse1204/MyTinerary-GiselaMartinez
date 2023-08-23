import React, { useEffect } from 'react';
import Header from './../components/Header';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  });

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;