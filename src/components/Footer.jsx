import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 bg-opacity-50 text-white">
  <div className="container mx-auto" style={{ lineHeight: '49px' }}>
        <div className="flex justify-center">
          <Link to="/home" className="text-white mx-4 hover:text-gray-300">
            Home
          </Link>
          <Link to="/cities" className="text-white mx-4 hover:text-gray-300">
            Cities
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;