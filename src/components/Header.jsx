import React from 'react'
import Nav from './Nav'
import Logo from './Logo';
React

const Header = () => {
  return (
    <header className='flex h-[10vh] items-center px-4 justify-between'>
        <section className='flex justify-center items-center h-full'>
          <h1 className='font-bold text-cyan-950 text-2xl'>My Tinerary</h1>
          <Logo/>
        </section>
        <Nav />
    </header>
  )
}

export default Header