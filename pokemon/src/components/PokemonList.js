import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Pokemon from './Pokemon';
import { pokeSelect, pokeCompare } from '../actions';

const PokemonList = props => {
  console.log('SELECTED', props);
  return (
    <>
      <SearchBar />
      <button onClick={props.pokeCompare}>Compare Pokemon</button>
      <div className="pokemonContainer">
        {props.filtered.length !== 0
          ? props.filtered.map(poke => (
              <Pokemon key={poke.Name} pokemon={poke} />
            ))
          : props.pokemon.map(poke => (
              <Pokemon key={poke.Name} pokemon={poke} />
            ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon,
  selected: state.pokemonReducer.selected,
  filtered: state.pokemonReducer.filtered
});

export default connect(
  mapStateToProps,
  { pokeSelect, pokeCompare }
)(PokemonList);
