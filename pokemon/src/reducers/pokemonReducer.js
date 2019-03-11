import { GET_SUCCESS, ADD_SUCCESS, DEL_SUCCESS, PUT_SUCCESS } from '../actions';

const initialState = {
  pokemon: [],
  getting: false,
  error: ''
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        ...state,
        pokemon: action.payload
      };
    case ADD_SUCCESS:
      return {
        ...state,
        pokemon: action.payload
      };
    case DEL_SUCCESS:
      return {
        ...state,
        pokemon: action.payload
      };
    case PUT_SUCCESS:
      return {
        ...state,
        pokemon: action.payload
      };
    default:
      return state;
  }
};
