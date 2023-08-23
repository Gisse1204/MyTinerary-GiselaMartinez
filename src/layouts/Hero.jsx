import React from 'react'

const Hero = ({children}) => {
  return (
    <main className='flex items-center justify-center mb-[49px]'>
      <div className='w-11/12 xl:w-3/4 h-full flex flex-col items-center overflow-hidden'>
        <div className='py-8 flex items-center justify-center flex-1 w-full'>
          {children}
        </div>               
      </div> 
    </main>
  )
}

export default Hero