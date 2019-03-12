import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';

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
    case LOGIN_FAILURE:
      return {
        ...state,
        token: '',
        error: action.payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: ''
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        token: '',
        error: action.payload
      };
    default:
      return state;
  }
};
