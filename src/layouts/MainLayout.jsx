import React from 'react'
import Header from './../components/Header';

React

const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-between'>
        <Header/>
        <div className='z-50 relative'>
        {children}
      </div>
        

    </div>
  )
}

export default MainLayout