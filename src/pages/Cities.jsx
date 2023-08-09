import React from 'react'
import { useParams } from 'react-router-dom'


const Cities = () => {
  const params = useParams()
  console.log(params)
  return (
    <section className='flex justify-center items-center w-full h-screen bg-center flex-row-reverse'>
          <img className='h-80' src={'./Under.png'} alt="Under" />
      </section>
  )
}

export default Cities