import React from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import LiAndAnchor from './LiAndAnchor';

const MobileMenu = ({ links, show, toggleMenu }) => {
  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {show ? <FaBars /> : <FaBars />}
        </button>
      </div>

      {show && <div className="fixed inset-0 bg-transparent z-10" onClick={toggleMenu}></div>}

      <ul
        className={`fixed top-0 right-0 w-60 md:w-auto h-screen md:h-auto md:flex md:flex-row items-center gap-5 p-2 bg-transparent ${
          show ? 'flex flex-col' : 'hidden md:flex'
        }`}
      >
        {links.map((link, index) => {
          return (
            <li key={index}>
              {link.content === 'Login' ? (
                <LiAndAnchor content={link.content} style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUser className='mr-2' /> {link.content}
                </LiAndAnchor>
              ) : (
                <LiAndAnchor value='#' content={link.content} />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MobileMenu;
