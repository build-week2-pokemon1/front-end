import React, { Component } from 'react';
import { catchPokemon, login } from '../src/actions/';
import { connect } from 'react-redux';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import PokemonList from './components/PokemonList';

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
            {!localStorage.getItem('token') ? <Link to="/login/">Login Now</Link> : <Link to="/logout/">Logout</Link>}
          </li>
        </ul>
        <h1>Pokemon:</h1>
        <Route path="/login/" render={ props => <Login login={this.props.login}/>}/>
        <Route path="/logout/" render={ props => {
          localStorage.clear()
          return (<Redirect to="/login" />)
        }}/>
        <PrivateRoute path="/pokemonlist" component={PokemonList} />
        </>
    )
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon
});

export default withRouter(connect(
  mapStateToProps,
  { catchPokemon,
    login
  }
)(App));
