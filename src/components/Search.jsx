import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../actions/cityActions';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
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