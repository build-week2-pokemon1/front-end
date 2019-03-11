import { LOGIN_SUCCESS } from '../actions';

const initialState = {
  token: '',
  error: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: ''
      };
    default:
      return state;
  }
};
