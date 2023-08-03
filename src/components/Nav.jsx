import React from 'react'
import reactLogo from '../../public/Logo.png'
React
const Nav = () => {
  return (
    <header className='flex h-[15vh]'>
        <h1>My Tinerary</h1>
        <img className='w-[15vh]' src={reactLogo} alt="Logo"/>
        <nav>
            <ol>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ol>
        </nav>
    </header>
  )
}

export default Nav