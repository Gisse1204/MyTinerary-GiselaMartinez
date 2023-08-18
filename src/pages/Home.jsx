import React from 'react';
import Hero from '../layouts/Hero';
import Button from '../components/Button';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <Hero>
        <div className='flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between p-2'>
          <div className='flex flex-col items-center '>
            <div className='flex flex-col indent-8 font-black text-orange-400 sm:text-2xl lg:text-3xl font-serif mb-4 ' style={{
              textShadow: '0 0 50px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1)',
              animation: 'shine 2s linear infinite',
              WebkitTextStroke: '1px rgba(0, 0, 0, 1)', // Agrega el efecto de borde
              textDecoration: 'underline transparent', // Oculta la línea de debajo del texto
              padding: '5px' // Añade un espacio entre el texto y el borde
            }}>
              Find your <p className="capitalize sm:uppercase text-red-400">perfect trip,</p> designed by insiders who <em>know and love their cities!</em>
            </div>
            
            <Button />
          </div>
          <div className='flex flex-col items-center text-orange-400'>
            <div className='font-semibold sm:text-xl lg:text-2xl' style={{
              textShadow: '0 0 50px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1)',
              animation: 'shine 2s linear infinite',
              WebkitTextStroke: '1px rgba(0, 0, 0, 1)', // Agrega el efecto de borde
              textDecoration: 'underline transparent', // Oculta la línea de debajo del texto
              padding: '5px' // Añade un espacio entre el texto y el borde
            }}>Popular Mytineraries
            </div>
            <Carousel />
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Home;