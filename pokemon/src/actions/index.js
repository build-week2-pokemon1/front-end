import axios from 'axios';

export const GET_LOADING = 'GET_LOADING';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const ADD_LOADING = 'ADD_LOADING';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const DEL_LOADING = 'DEL_LOADING';
export const DEL_SUCCESS = 'DEL_SUCCESS';
export const DEL_FAILURE = 'DEL_FAILURE';
export const PUT_LOADING = 'PUT_LOADING';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const PUT_FAILURE = 'PUT_FAILURE';

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

// const authUrl = ''

// export const login = credentials => dispatch => {
//   dispatch({ type: LOGIN });
//   return axios()
//       .post('http://localhost:5000/api/login', credentials)
//       .then(res => {
//           localStorage.setItem('token', res.data.payload)
//           dispatch({
//               type: LOGIN_SUCCESS,
//               payload: res.data.payload
//           })
//       })
//       .catch(err => {
//           dispatch({ type: LOGIN_FAILURE, payload: err.response.message })
//       })
// }

export const catchPokemon = () => {
  return dispatch => {
    dispatch({ type: GET_LOADING });
    axios
      .get(`${pokemonUrl}`)

      .then(res => {
        console.log(res);

        dispatch({
          type: GET_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: GET_FAILURE, payload: 'No Smurf for you' });
      });
  };
};
