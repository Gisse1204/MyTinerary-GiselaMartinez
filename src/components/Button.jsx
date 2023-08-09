import React from 'react';

const Button = () => {
  return ( 
    <div className='flex flex-1 mt-6'>
      <button className='flex font-serif transition-all duration-500 
        hover:scale-110 font-bold border border-black'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        View More
      </button>
    </div>
  );
}

export default Button;