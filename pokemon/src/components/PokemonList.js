import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Pokemon from './Pokemon';
import { pokeSelect, pokeCompare } from '../actions';
import styled from 'styled-components';
import Compare from '../img/compare.png';
import Pokeball from '../img/Pokeball.png';

const PokemonList = props => {
  console.log('SELECTED', props);
  return (
    <>
      <SearchBar />
      <Button1 onClick={props.pokeCompare}>
        <Compare1 src={Compare} alt="Compare" />
      </Button1>
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

const Button1 = styled.button`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border-style: none;
  background-image: url(${Pokeball});
  background-size: cover;
  background-color: white;
  margin: 10px;
  cursor: pointer;
`;

const Compare1 = styled.img`
  width: 200px;
`;

export default connect(
  mapStateToProps,
  { pokeSelect, pokeCompare }
)(PokemonList);
