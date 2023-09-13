import React, { Fragment } from 'react';
import LiAndAnchor from './LiAndAnchor';
import { useSelector } from 'react-redux';

const Nav = ({ links, menuOpen }) => {
  const { status } = useSelector((state) => state.authReducer);

  return (
    <nav className={`sm:flex ${menuOpen ? 'block' : 'hidden'} sm:mt-0 mt-4`}>
      <ul className='sm:flex gap-6'>
        {links.map((link, indice) => {
          if (status === 'online' && link.roles.includes('logged')) {
            return (
              <Fragment key={indice}>
                <LiAndAnchor
                  value={link.value}
                  active={link.active}
                  content={link.content}
                />
              </Fragment>
            );
          } else if (status === 'offline' && link.roles.includes('default')) {
            return (
              <Fragment key={indice}>
                <LiAndAnchor
                  value={link.value}
                  active={link.active}
                  content={link.content}
                />
              </Fragment>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Nav;
