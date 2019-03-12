import axios from '../authentication/axiosAuth';
import signupAxios from 'axios';

export const ADD_FAILURE = 'ADD_FAILURE';
export const ADD_LOADING = 'ADD_LOADING';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const DEL_FAILURE = 'DEL_FAILURE';
export const DEL_LOADING = 'DEL_LOADING';
export const DEL_SUCCESS = 'DEL_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const GET_LOADING = 'GET_LOADING';
export const GET_SUCCESS = 'GET_SUCCESS';
export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const POKE_COMPARE = 'POKE_COMPARE';
export const POKE_SELECT = 'POKE_SELECT';
export const PUT_FAILURE = 'PUT_FAILURE';
export const PUT_LOADING = 'PUT_LOADING';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

const pokemonUrl = 'http://localhost:5000';

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGNUP });
  return signupAxios
    .post(`${pokemonUrl}/api/register`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: 'Can not complete signup, please try again'
      });
    });
};

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN });
  return axios()
    .post(`${pokemonUrl}/api/login`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Can not connect to server or check your username/pass'
      });
    });
};

export const catchPokemon = () => {
  return dispatch => {
    dispatch({ type: GET_LOADING });
    axios()
      .get(`${pokemonUrl}/api/pokemon`)

      .then(res => {
        console.log('RES', res);

        dispatch({
          type: GET_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: GET_FAILURE, payload: 'That Pokemon got away!' });
      });
  };
};

export const searchPokemon = e => dispatch => {
  dispatch({ type: SEARCH_POKEMON, payload: e });
};

export const pokeSelect = name => {
  return {
    type: POKE_SELECT,
    payload: name
  };
};

export const pokeCompare = () => {
  return {
    type: POKE_COMPARE
  };
};
