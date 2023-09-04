import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findCities } from '../actions/cityActions';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
  const value = event.target.value.trim();
    setSearchTerm(value);
    dispatch(findCities({ target: { value, id: 'name' } }));
  };

  return (
    <div className='flex flex-col mb-4 p-2'>
      <input
        type='text'
        placeholder='Search cities...'
        value={searchTerm}
        onChange={handleSearch}
        className='mb-4 p-2 border rounded'
      />
    </div>
  );
};

export default Search;