import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const links = [
  { value: '#', content: 'Home', id: 'Home' },
  { value: '#', content: 'Cities', id: 'Cities' },
  { value: '#', content: 'Login', id: 'Login' },
];

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav>
      <MobileMenu links={links} show={showMobileMenu} toggleMenu={toggleMobileMenu} />
    </nav>
  );
};

export default Nav;
