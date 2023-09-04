import axios from 'axios';

export const ALL_CITIES = 'ALL_CITIES';
export const FIND_CITIES = 'FIND_CITIES';
export const FIND_CITY = 'FIND_CITY';

export const getAllCities = () => (dispatch, getState) => {
  axios
    .get('http://localhost:1212/api/cities')
    .then((data) => {
      if (data.data.success) {
        dispatch({
          type: ALL_CITIES,
          payload: { cities: data.data.response, cityRelated: data.data.response, error: false },
        });
      } else {
        dispatch({ type: ALL_CITIES, payload: { error: true } });
      }
    })
    .catch((error) => dispatch({ type: ALL_CITIES, payload: { error: true } }));
};

export const findCities = (event) => (dispatch, getState) => {
    //console.log('event.target.value:', event.target.value);
    //console.log('event.target.id:', event.target.id);
    dispatch({
      type: FIND_CITIES,
      payload: { initialValue: event.target.value.toLowerCase().trim(), search: event.target.id },
    });
  };

export const findCity = (id) => (dispatch, getState) => {
  axios
    .get(`http://localhost:1212/api/cities/${id}`)
    .then((respuesta) => {
      if (respuesta.data.success) {
        dispatch({ type: FIND_CITY, payload: { city: respuesta.data.response, error: false } });
      } else {
        dispatch({ type: FIND_CITY, payload: { error: true } });
      }
    })
    .catch((error) => {
      dispatch({ type: FIND_CITY, payload: { error: true } });
    });
};

  export const updateSearchTerm = (searchTerm) => ({
    type: 'UPDATE_SEARCH_TERM',
    payload: searchTerm,
  });

