import {
  GET_FAILURE,
  GET_LOADING,
  GET_SUCCESS,
  SEARCH_POKEMON,
  POKE_COMPARE,
  POKE_SELECT
} from '../actions';

const initialState = {
  pokemon: [],
  filtered: [],
  getting: false,
  error: '',
  selected: false
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAILURE:
      return {
        ...state,
        getting: false,
        error: action.payload
      };
    case GET_LOADING:
      return {
        ...state,
        pokemon: [],
        getting: true,
        error: ''
      };
    case GET_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        getting: false,
        error: '',
        filtered: [],
        selected: false
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        filtered: state.pokemon.filter(poke =>
          poke.Name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case POKE_SELECT:
      return {
        ...state,
        pokemon: state.pokemon.map(poke => {
          if (poke.Name === action.payload) {
            return {
              ...poke,
              selected: true
            };
          }
          return poke;
        }),
        selected: true
      };
    case POKE_COMPARE:
      return {
        ...state,
        pokemon: state.pokemon.filter(poke => poke.selected),
        filtered: state.pokemon.filter(poke => poke.selected)
      };
    default:
      return state;
  }
};
