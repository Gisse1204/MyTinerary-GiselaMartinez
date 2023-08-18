import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardCities from './../components/CardCities';
import axios from 'axios';

const Cities = () => {
  const params = useParams();
  console.log(params);

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('http://localhost:1212/api/cities')
      .then(res => {
        setCities(res.data.response);
        setLoading(false);
        console.log(res.data.response)
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-10 w-full h-screen flex justify-center items-center bg-center bg-cover flex-wrap gap-4'>
      {loading ? (
        <p>Loading cities...</p>
      ) : (
        cities.map(city => <CardCities key={city._id} data={city} />)
      )}
    </div>
  );
};

export default Cities;