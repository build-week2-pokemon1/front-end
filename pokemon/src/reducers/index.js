import { combineReducers } from 'redux';
import { pokieReducer } from './pokemonReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  pokieReducer,
  userReducer
});
