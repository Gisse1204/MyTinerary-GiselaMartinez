import axios from "axios";

const setItineraries = (itineraries) => {
  console.log('Itinerarios recibidos:', itineraries);
  return {
    type: 'SET_ITINERARIES',
    payload: itineraries,
  };
};

export const findItineraries = (id) => {
  return (dispatch, getState) => {
    axios
      .get(`http://localhost:1212/api/itinerary/${id}`)
      .then((res) => {
        console.log('Respuesta de la API:', res.data.response);
        const itineraries = Array.isArray(res.data.response) ? res.data.response : [];
        dispatch(setItineraries(itineraries));
      })
      .catch((error) => {
        dispatch({ type: 'FIND_ITINERARIES', payload: { error: true } });
      });
  };
};





