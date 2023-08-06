import React, { useState } from 'react'
import Arrow from './Arrow'

const images = [
    '/Alemania.png',
    '/Australia.jpg',
    '/Brazil.jpeg',
    '/Canada.png',
    '/Chile.jpg',
    '/Costa Rica.jpg',
    '/Cuba.jpeg',
    '/Dinamarca.png',
    '/España.jpg',
    '/Finlandia.jpg',
    '/Francia.jpg',
    '/Irlanda.png',
    '/Italia.jpeg',
    '/Japon.png',
    '/Luxemburgo.jpg',
    '/Noruega.jpg',
    '/Nueva Zelanda.png',
    '/Paises bajos.jpg',
    '/Polinesia francesa.png',
    '/Reino Unido.jpg',
    '/Singapur.png',
    '/Suecia.jpg',
    '/Suiza.jpg',
    '/USA.jpg',
  ];

const Carousel = () => {
const [startIndex, setStartIndex] = useState(0);
const [shownIndexes, setShownIndexes] = useState([0, 1, 2, 3]);
  
const sortedImages = images.slice().sort();
  
const next = () => {
    const nextStartIndex = (startIndex + 4) % sortedImages.length;
    setStartIndex(nextStartIndex);
  
    const nextIndexes = [];
    for (let i = nextStartIndex; i < nextStartIndex + 4; i++) {
    const imageIndex = i % sortedImages.length;
    nextIndexes.push(imageIndex);
    }
    setShownIndexes(nextIndexes);
};
  
const prev = () => {
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
};
  
return (
    <div className='w-full min-h-screen flex justify-center items-center'>
    <Arrow src="/flecha-izquierda.png" alt='flecha-i' fn={prev} />
    <div className='w-[70vh] max-h-[100vh] p-2 rounded-md m-4 overflow-hidden'>
        <div className='flex gap-1 items-center justify-center px-4'>
        {shownIndexes.slice(0, 2).map((imageIndex, indexMap) => (
            <img key={indexMap} className='w-[30vh] h-[40vh]' src={sortedImages[imageIndex]} alt=""/>
        ))}
        </div>
        <div className='flex gap-1 items-center justify-center px-4'>
        {shownIndexes.slice(2, 4).map((imageIndex, indexMap) => (
            <img key={indexMap} className='w-[30vh] h-[40vh]' src={sortedImages[imageIndex]} alt=""/>
        ))}
        </div>
    </div>
    <Arrow src="/flecha-correcta.png" alt='flecha-d' fn={next} />
    </div>
);
};
  
export default Carousel;