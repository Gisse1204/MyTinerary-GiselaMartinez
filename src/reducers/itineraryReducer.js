const initialState = {
  itinerary: [],
};

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ITINERARIES':
      return {
        ...state,
        itinerary: action.payload.itinerary,
      };
    case 'SET_ITINERARIES':
      return {
        ...state,
        itinerary: action.payload,
      };
    default:
      return state;
  }
};

export default itineraryReducer;