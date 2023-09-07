import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCities } from '../actions/cityActions';
import CardCities from '../components/CardCities';
import Search from '../components/Search.jsx';
import { createSelector } from 'reselect';
import Footer from '../components/Footer';

const getCities = (state) => state.city.cities;
const getSearchTerm = (state) => state.city.searchTerm;

const Cities = () => {
  const dispatch = useDispatch();
  const cities = useSelector(getCities);
  const searchTerm = useSelector(getSearchTerm);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().startsWith(searchTerm)
  );

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <div className='p-10 w-full h-screen flex flex-col items-center bg-center bg-cover'>
      <Search />
      <div className='flex flex-wrap justify-evenly'>
        {filteredCities.length === 0 ? (
          <p className='card-body bg-orange-700 text-white rounded-md opacity-80 text-center'>
            No cities matching the search were found
          </p>
        ) : (
          filteredCities.map((city) => (
            <div key={city._id} className='flex flex-wrap'>
              <CardCities key={city._id} data={city} />
            </div>
          ))
        )}
      </div>
      <div className='container mx-auto' style={{ lineHeight: '49px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Cities;