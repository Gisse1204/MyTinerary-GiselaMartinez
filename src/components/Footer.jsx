import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 bg-opacity-50 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <a href="#" className="text-white mx-4 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white mx-4 hover:text-gray-300">
            Cities
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;