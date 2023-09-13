import React from 'react';
import { Link } from 'react-router-dom';

const LiAndAnchor = (props) => {
  const { value, content, active } = props;

  return (
    <li>
      <Link
        className={`text-xl text-gray-300 hover:text-orange-300 transition-all duration-500`}
        style={active ? { color: 'white' } : {}}
        to={value}
      >
        {content === 'Sign In' && (
          <span className="flex items-center">
            <img src="/public/icono.png" alt="User Icon" className="w-6 h-6 inline-block mr-1" />
            {content}
          </span>
        )}
        {content !== 'Sign In' && content}
        
      </Link>
    </li>
  );
};

export default LiAndAnchor;