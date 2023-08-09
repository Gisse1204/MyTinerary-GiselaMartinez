import React from 'react';
import Hero from '../layouts/Hero';
import Button from '../components/Button';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <Hero>
        <div className='flex flex-col items-center justify-center text-center sm:flex-row lg:items-start sm:justify-between p-2'>
          <div className='flex flex-col items-center sm:items-start'>
            <h1 className='font-black sm:text-2xl lg:text-3xl font-serif mb-4' style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 170, 0, 0.9), 0 0 20px rgba(255, 215, 0, 0.7)',
              animation: 'shine 2s linear infinite',
              WebkitTextStroke: '1px rgba(255, 255, 235, 0.6)', // Agrega el efecto de borde
              textDecoration: 'underline transparent', // Oculta la línea de debajo del texto
              padding: '5px' // Añade un espacio entre el texto y el borde
            }}>
              Find your perfect trip, designed by insiders who know and love their cities!
            </h1>
            <p className='font-semibold sm:text-xl lg:text-2xl' style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 255, 255, 1)',
              animation: 'shine 2s linear infinite'
            }}>Our app will help you find the perfect path for your next trip. With an easy-to-use interface 
              and a host of itinerary options, planning your next trip has never been easier.
            </p>
            <Button />
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-semibold sm:text-xl lg:text-2xl' style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 255, 255, 1)',
              animation: 'shine 2s linear infinite',
              WebkitTextStroke: '1px rgba(25, 215, 170, 0.6)', // Agrega el efecto de borde
              textDecoration: 'underline transparent', // Oculta la línea de debajo del texto
              padding: '5px' // Añade un espacio entre el texto y el borde
            }}>Popular Mytineraries
            </p>
            <Carousel />
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Home;