import React from 'react';
import Hero from '../layouts/Hero';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>    
      <Hero>
        <div className='flex flex-col px-2 sm:flex-row sm:items-center sm:justify-between'>
          <div className='lg:w-1/2 lg:pr-8'>
            <h1 className='font-black text-4xl font-serif mb-4 lg:text-5xl' style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 170, 0, 0.9), 0 0 20px rgba(255, 215, 0, 0.7)',
                animation: 'shine 2s linear infinite'
              }}>
              Find the perfect destination
            </h1>
            <p className='font-bold text-xl mb-4 lg:text-2xl' style={{
                textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 255, 255, 1)',
                animation: 'shine 2s linear infinite'
              }}>Our app will help you find the perfect path for your next trip. With an easy-to-use interface 
                and a host of itinerary options, planning your next trip has never been easier.
            </p>
            <Button />
          </div>
          <div className='lg:w-1/2 lg:pl-8'>
            <Carousel />
          </div>
        </div>
      </Hero>
      <Footer />
    </>
  );
}

export default Home;