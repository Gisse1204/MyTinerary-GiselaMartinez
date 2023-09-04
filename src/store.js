import cityReducer from './reducers/cityReducer';
import itineraryReducer from './reducers/itineraryReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer:{
    city: cityReducer,
    itinerary: itineraryReducer
  }
})

export default store;