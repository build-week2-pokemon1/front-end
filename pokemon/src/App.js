import React, { Component } from 'react';
import styled from 'styled-components';
import { catchPokemon, login } from '../src/actions/';
import { connect } from 'react-redux';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
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
              <Link to="/login/">
                <LoginImg src={LoginIM} alt="login" />
              </Link>
            ) : (
              <Link to="/logout/">Logout</Link>
            )}
          </li>
        </ul>

        <PokeDexImg src={PokeDex} alt="PokeDex" />
        <Route
          path="/login/"
          render={props => <Login login={this.props.login} />}
        />
        <Route
          path="/logout/"
          render={props => {
            localStorage.clear();
            return <Redirect to="/login" />;
          }}
        />
        <PrivateRoute path="/pokemonlist" component={PokemonList} />
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
    { catchPokemon, login }
  )(App)
);
