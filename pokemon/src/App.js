import React, { Component } from 'react';
import { catchPokemon } from '../src/actions/';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.catchPokemon();
  }
  render() {
    return <div className="App">stuff</div>;
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon
});

export default connect(
  mapStateToProps,
  { catchPokemon }
)(App);
