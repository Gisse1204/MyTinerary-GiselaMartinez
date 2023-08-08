import React, { useState, useEffect, useCallback } from 'react';
import Arrow from './Arrow'

const combinedData = [
  { image: '/Australia.jpg', countryName: 'Australia' },
  { image: '/Brazil.jpeg', countryName: 'Brazil' },
  { image: '/Canada.png', countryName: 'Canada' },
  { image: '/Costa Rica.jpg', countryName: 'Costa Rica' },
  { image: '/España.jpg', countryName: 'España' },
  { image: '/Francia.jpg', countryName: 'Francia' },
  { image: '/Irlanda.png', countryName: 'Irlanda' },
  { image: '/Italia.jpeg', countryName: 'Italia' },
  { image: '/Japon.png', countryName: 'Japon' },
  { image: '/Nueva Zelanda.png', countryName: 'Nueva Zelanda' },
  { image: '/Reino Unido.jpg', countryName: 'Reino Unido' },
  { image: '/USA.jpg', countryName: 'USA' },
];

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [shownIndexes, setShownIndexes] = useState([0, 1, 2, 3]);

  const sortedImages = combinedData.map(entry => entry.image).sort();

  const next = useCallback(() => {
    const nextStartIndex = (startIndex + 4) % sortedImages.length;
    setStartIndex(nextStartIndex);

    const nextIndexes = [];
    for (let i = nextStartIndex; i < nextStartIndex + 4; i++) {
      const imageIndex = i % sortedImages.length;
      nextIndexes.push(imageIndex);
    }
    setShownIndexes(nextIndexes);
  }, [startIndex, sortedImages]);

  const prev = useCallback(() => {
    let nextStartIndex = startIndex - 4;
    if (nextStartIndex < 0) {
      nextStartIndex = sortedImages.length + nextStartIndex;
    }
    setStartIndex(nextStartIndex);

    const nextIndexes = [];
    for (let i = nextStartIndex; i < nextStartIndex + 4; i++) {
      const imageIndex = i % sortedImages.length;
      nextIndexes.push(imageIndex);
    }
    setShownIndexes(nextIndexes);
  }, [startIndex, sortedImages]);

  // Función para cambiar las imágenes automáticamente
  const autoChangeImages = useCallback(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Cambiar imagen cada 5 segundos

    return interval;
  }, [next]);

  useEffect(() => {
    const autoChangeInterval = autoChangeImages();

    return () => {
      clearInterval(autoChangeInterval); // Limpieza del intervalo al desmontar el componente
    };
  }, [autoChangeImages]);

  return (
    <div className='flex justify-center items-center'>
      <Arrow src="/flecha-izquierda.png" alt='flecha-i' fn={prev} />
      <div className='w-[70vh] max-h-[100vh] p-2 rounded-md m-4 overflow-hidden'>
        <div className='grid grid-cols-2 gap-4 items-center justify-center px-4'>
          {shownIndexes.map((imageIndex, indexMap) => (
            <div key={indexMap} className='relative'>
              <img className='w-full h-[40vh] object-cover' src={sortedImages[imageIndex]} alt='' />
              <span className='absolute bg-black text-white px-2 py-1 rounded-md opacity-80 bottom-0 left-0 w-full text-center'>
                {combinedData[imageIndex].countryName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Arrow src="/flecha-correcta.png" alt='flecha-d' fn={next} />
    </div>
  );
};

export default Carousel;