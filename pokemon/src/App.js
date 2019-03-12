import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { login, signUp } from './actions';

import { connect } from 'react-redux';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './views/SignupView';
import PokemonList from './components/PokemonList';

import PokeDex from './img/PokeDex.png';
import LogOutIM from './img/logout.png';
import LoginIM from './img/login.png';
import SignUp from './img/signup.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <ListStyle>
            {!localStorage.getItem('token') ? (
              <Link to="/login/">
                <LoginImg src={LoginIM} alt="PokeImg" />
              </Link>
            ) : (
              <Link to="/logout/">
                <LoginOut src={LogOutIM} alt="LogOut" />
              </Link>
            )}
            {!localStorage.getItem('token') ? (
              <Link to="/signup/">
                <SignUpImg2 src={SignUp} alt="Signup" />
              </Link>
            ) : null}
          </ListStyle>
        </ul>

        <PokeDexImg src={PokeDex} alt="PokeDex" />
        <Route
          path="/signup/"
          render={props => (
            <Signup signup={this.props.signUp} error={this.props.loginError} />
          )}
        />
        <Route
          path="/login/"
          render={props => (
            <Login login={this.props.login} error={this.props.loginError} />
          )}
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
const ListStyle = styled.li`
  list-style: none;
`;
const SignUpImg2 = styled.img`
  width: 150px;
`;

const LoginImg = styled.img`
  width: 150px;
`;

const LoginOut = styled.img`
  width: 150px;
`;

const PokeDexImg = styled.img`
  width: 30%;
`;

const mapStateToProps = state => ({
  loginError: state.userReducer.error,
  pokemon: state.pokemonReducer.pokemon
});

App.prototypes = {
  pokemon: PropTypes.array,
  loginError: PropTypes.string
};


export default withRouter(
  connect(
    mapStateToProps,
    { login, signUp }
  )(App)
);
