import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardCities from './../components/CardCities';
import axios from 'axios';
import Footer from '../components/Footer';

const Cities = () => {
  const params = useParams();
  console.log(params);

  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios('http://localhost:1212/api/cities')
      .then((res) => {
        const filteredCities = res.data.response.filter((city) =>
          city.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
        );
        setCities(filteredCities);
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
      });
  }, [searchTerm]);

  return (
    <div className='p-10 w-full h-screen flex flex-col items-center bg-center bg-cover'>
      <div className='flex flex-col mb-4 p-2'>
        <input
          type='text'
          placeholder='Search cities...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='mb-4 p-2 border rounded'
        />
      </div>
      <div className='flex flex-wrap justify-evenly'>
        {cities.length === 0 ? (
          <p className='card-body bg-orange-700 text-white rounded-md opacity-80 text-center'>
            No cities matching the search were found</p>
        ) : (
          cities.map((city) => (
            <div key={city._id} className='flex flex-wrap'>
              <CardCities key={city._id} data={city} />
            </div>
          ))
        )}
      </div>
      <div className="container mx-auto" style={{ lineHeight: '49px' }}><Footer/></div>    
    </div>
  );
};

export default Cities;