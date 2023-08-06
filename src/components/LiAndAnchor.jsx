import React from 'react';

const LiAndAnchor = ({ value, content, children, style }) => {
  return (
    <button style={style} className='text-white bg-[rgba(0,0,0,0.5)] rounded-lg p-2' href={value}>
      {children ? children : content}
    </button>
  );
};

export default LiAndAnchor;