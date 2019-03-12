import {
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
  getting: false,
  error: '',
  selected: false
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
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.filter(poke =>
          poke.Name.includes(action.payload)
        )
      };

    case POKE_SELECT:
      return {
        ...state,
        pokemon: state.pokemon.map(poke => {
          if (poke.Name === action.payload) {
            return {
              ...poke,
              selected: !state.selected
            };
          }
          return poke;
        }),
        selected: !state.selected
      };
    case POKE_COMPARE:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
};
