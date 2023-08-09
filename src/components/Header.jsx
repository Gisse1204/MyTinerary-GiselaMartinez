import React, { useState } from 'react';
import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { value: '/home', content: 'Home', id: 'Home' },
    { value: '/cities', content: 'Cities', id: 'Cities' },
    { value: '#', content: 'Login', id: 'Login' },
  ];

  return (
    <header className='flex h-[20vh] items-center px-5 justify-between bg-slate-800 bg-opacity-50 sm:h-[11vh]'>
      <section className='flex justify-between items-center w-full'>
        <div className='flex items-center'>
          <h1
            className='font-semibold sm:text-xl lg:text-2xl'
            style={{
            textShadow:
              '0 0 15px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 255, 255, 1)',
            animation: 'shine 2s linear infinite',
          }}
          >
            My Tinerary
          </h1>
          <Logo />
        </div>
        <div className='sm:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Cambiar el estado al hacer clic en el botón
            className='text-xl text-white'
          >
            ☰
          </button>
        </div>
        <Nav links={links} menuOpen={menuOpen} />
      </section>
    </header>
  );
};

export default Header;