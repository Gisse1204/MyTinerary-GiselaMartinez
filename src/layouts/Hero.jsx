import React from 'react'

React

const Hero = ({children}) => {
  return (
    <main className='h-[100vh] flex items-center justify-center'>
      <div className='w-11/12 xl:w-3/4 h-full flex flex-col items-center overflow-hidden'>
        <div className='py-8 flex items-center justify-center flex-1 w-full'>
          {children}
        </div>               
      </div> 
    </main>
  )
}

export default Hero