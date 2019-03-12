import {
  GET_LOADING,
  GET_SUCCESS,
  ADD_SUCCESS,
  DEL_SUCCESS,
  PUT_SUCCESS,
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
    case GET_LOADING:
      return {
        ...state,
        pokemon: [],
        getting: true
      }
    case GET_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        getting: false
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
        selected: !state.selected
      };
    case POKE_COMPARE:
      return {
        ...state,
        pokemon: state.pokemon.filter(poke => poke.selected)
      };

    default:
      return state;
  }
};
