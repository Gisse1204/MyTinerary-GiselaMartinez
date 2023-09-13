import cityReducer from './reducers/cityReducer';
import itineraryReducer from './reducers/itineraryReducer';
import authReducer from './reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer:{
    city: cityReducer,
    itinerary: itineraryReducer,
    authReducer: authReducer,
  }
})

export default store;