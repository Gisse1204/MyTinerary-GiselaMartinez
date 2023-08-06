import React from 'react';
import Hero from '../layouts/Hero';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero>
        <div className='flex flex-col flex-grow-1 px-4'>
          <h1 className='font-extrabold text-2xl font-serif'>Find the perfect destination</h1>
          <p className='font-semibold'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface 
            and a host of itinerary options, planning your next trip has never been easier.</p>
          <Button />
        </div>
        <div className='flex flex-grow-0'>
          <Carousel />
        </div>
      </Hero>
      <Footer />
    </>
  )
}

export default Home