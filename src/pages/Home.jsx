import React from 'react';
import Hero from '../layouts/Hero';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero>
      <div className='flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between p-2'>
  <div className='flex flex-col items-center '>
    <p className='flex flex-col indent-8 font-black text-orange-400 sm:text-2xl lg:text-3xl font-serif mb-4 ' style={{
      textShadow: '0 0 50px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1)',
      animation: 'shine 2s linear infinite',
      WebkitTextStroke: '1px rgba(0, 0, 0, 1)',
      textDecoration: 'underline transparent',
      padding: '5px',
      position: 'relative' // Añadido para posicionar el elemento relativo
    }}>
      Find your <span className="text-red-400" style={{
    textShadow: '0 0 50px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1)',
    WebkitTextStroke: '1px rgba(0, 0, 0, 1)',
    textDecoration: 'underline transparent',
    padding: '5px',
    animation: 'pulsate 5s ease-in-out infinite',
  }}>Perfect Trip,</span> designed by insiders who <em>know and love their cities!</em>
    </p>            
    <Button />
          </div>
          <div className='flex flex-col items-center'>
      <p className='font-semibold sm:text-xl lg:text-2xl pulsate' style={{
        textShadow: '0 0 50px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1)',
        WebkitTextStroke: '1px rgba(0, 0, 0, 1)',
        position: 'relative', // Añadido para posicionar el elemento relativo
        zIndex: '1', // Elevar el elemento sobre la sombra
        animation: 'blink 2s linear infinite' // Animación de brillo intermitente
      }}
  >Popular Mytineraries</p>
            <Carousel />
          </div>
        </div>
      </Hero>
      <Footer/>
    </>
  );
};

export default Home;