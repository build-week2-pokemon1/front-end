import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  pokemonReducer,
  userReducer
});
