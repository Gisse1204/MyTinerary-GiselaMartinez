import React, { Fragment } from 'react';
import LiAndAnchor from './LiAndAnchor';

const Nav = ({ links, menuOpen }) => {
  return (
    <nav className={`sm:flex ${menuOpen ? 'block' : 'hidden'} sm:mt-0 mt-4`}>
      <ul className='sm:flex gap-6'>
        {links.map((link, indice) => {
          return (
            <Fragment key={indice}>
              <LiAndAnchor
                value={link.value}
                active={link.active}
                content={link.content}
              />
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
