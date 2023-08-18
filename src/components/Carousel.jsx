import React, { useState, useEffect, useCallback } from 'react';
import Arrow from './Arrow';

const API_URL = 'http://localhost:1212/api/cities';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [shownIndexes, setShownIndexes] = useState([0, 1, 2, 3]);
  const [data, setData] = useState([]);

  const next = useCallback(() => {
    const nextStartIndex = (startIndex + 4) % data.length;
    setStartIndex(nextStartIndex);

    const nextIndexes = [];
    for (let i = nextStartIndex; i < nextStartIndex + 4; i++) {
      const dataIndex = i % data.length;
      nextIndexes.push(dataIndex);
    }
    setShownIndexes(nextIndexes);
  }, [startIndex, data]);

  const prev = useCallback(() => {
    let nextStartIndex = startIndex - 4;
    if (nextStartIndex < 0) {
      nextStartIndex = data.length + nextStartIndex;
    }
    setStartIndex(nextStartIndex);

    const nextIndexes = [];
    for (let i = nextStartIndex; i < nextStartIndex + 4; i++) {
      const dataIndex = i % data.length;
      nextIndexes.push(dataIndex);
    }
    setShownIndexes(nextIndexes);
  }, [startIndex, data]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData.response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(next, 5000); // Cambiar imagen cada 5 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, [next]);

  return (
    <div className='flex justify-center items-center'>
      <Arrow src="/flecha-izquierda.png" alt='flecha-i' fn={prev} />
      <div className='w-[70vh] max-h-[100vh] p-2 rounded-md m-4 overflow-hidden'>
        <div className='grid grid-cols-2 gap-4 items-center justify-center px-4'>
          {shownIndexes.map((dataIndex, indexMap) => (
            <div key={indexMap} className='relative'>
              <img className='w-full h-[40vh] object-cover' src={data[dataIndex]?.image} alt='' />
              <span className='absolute bg-black text-white px-2 py-1 rounded-md opacity-80 bottom-0 left-0 w-full text-center'>
                {data[dataIndex]?.name}
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