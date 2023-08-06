import React from 'react'

const Arrow = ({ src, alt, fn }) => {
  return (
    <div className='p-2 rounded-2xl bg-black bg-opacity-30 cursor-pointer' onClick={fn}>
      <img className='w-8' src={src} alt={alt} />
    </div>
  )
}

export default Arrow