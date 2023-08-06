import React from 'react'
import Header from './../components/Header';

React

const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-between w-full'>
        <Header/>
         {children}

    </div>
  )
}

export default MainLayout