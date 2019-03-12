import React, { Component } from 'react';

import styled from 'styled-components';
import { catchPokemon, login, signUp } from './actions';

import { connect } from 'react-redux';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './views/SignupView';
import PokemonList from './components/PokemonList';

import PokeDex from './img/PokeDex.png';
import LoginIM from './img/login.png';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.catchPokemon();
  }
  render() {
    return (
      <>
        <ul>
          <li>
            {!localStorage.getItem('token') ? (
              <Link to='/login/'>
                <LoginImg src={LoginIM} alt='PokeImg' />
              </Link>
            ) : (
              <Link to='/logout/'>Logout</Link>
            )}
            {!localStorage.getItem('token') ? (
              <Link to='/signup/'>Sign Up Now</Link>
            ) : null}
          </li>
        </ul>

        <PokeDexImg src={PokeDex} alt='PokeDex' />
        <Route
          path='/signup/'
          render={props => <Signup signup={this.props.signUp} />}
        />
        <Route
          path='/login/'
          render={props => <Login login={this.props.login} />}
        />
        <Route
          path='/logout/'
          render={props => {
            localStorage.clear();
            return <Redirect to='/login' />;
          }}
        />

        <PrivateRoute path='/pokemonlist' component={PokemonList} />
      </>
    );
  }
}

const LoginImg = styled.img`
  width: 150px;
  height: 80px;
`;

const PokeDexImg = styled.img`
  width: 30%;
`;

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon
});

export default withRouter(
  connect(
    mapStateToProps,
    { catchPokemon, login, signUp }
  )(App)
);
