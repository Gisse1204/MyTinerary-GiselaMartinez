import { createSelector } from 'reselect';

const initialState = {
  cities: [],
  allCities: [],
  searchTerm: '',
};

const cityReducer = (state = initialState, action) => {
  let filteredCities;
  switch (action.type) {
    case 'ALL_CITIES':
      return {
        ...state,
        cities: action.payload.cities,
        error: action.payload.error,
      };

    case 'FIND_CITIES':
      if (action.payload.initialValue === '') {
        return {
          ...state,
          cities: state.allCities,
        };
      } else {
        return {
          ...state,
          cities: state.allCities.filter((city) =>
            city[action.payload.search]
              .toLowerCase()
              .startsWith(action.payload.initialValue.toLowerCase())
          ),
        };
      }

    case 'FIND_CITY':
      return {
        ...state,
        ...action.payload,
      };

    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};

export const getFilteredCities = createSelector(
  (state) => state.city.allCities,
  (state) => state.city.searchTerm,
  (allCities, searchTerm) =>
    allCities.filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
    )
);

export default cityReducer;