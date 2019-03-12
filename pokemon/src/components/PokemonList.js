import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import Pokemon from './Pokemon';
import { pokeSelect, pokeCompare } from '../actions';

const PokemonContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

const PokemonList = props => {
  console.log('SELECTED', props);
  return (
    <>
      <SearchBar />
      <button onClick={props.pokeCompare}>Compare Pokemon</button>
      <PokemonContainer>
      {props.getting && (
      <Loader
        type='Puff'
        color='#ff1f1f'
        height='400'
        width='400'
      />
      )}
        {props.filtered.length !== 0
          ? props.filtered.map(poke => (
              <Pokemon key={poke.Name} pokemon={poke} pokeSelect={props.pokeSelect} />
            ))
          : props.pokemon.map(poke => (
              <Pokemon key={poke.Name} pokemon={poke} pokeSelect={props.pokeSelect} />
            ))}
      </PokemonContainer>
    </>
  );
};

const mapStateToProps = state => ({
  filtered: state.pokemonReducer.filtered,
  getting: state.pokemonReducer.getting,
  pokemon: state.pokemonReducer.pokemon,
  selected: state.pokemonReducer.selected,
});

export default connect(
  mapStateToProps,
  { pokeSelect, pokeCompare }
)(PokemonList);
