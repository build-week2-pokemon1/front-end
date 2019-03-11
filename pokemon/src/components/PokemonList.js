import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const PokemonList = props => {
  console.log('poke props:', props.pokemon);
  return (
    <>
      <SearchBar />

      <ul>
        {props.pokemon.map(poke => {
          return (
            <ul key={poke.Name}>
              <li>
                Name: {poke.Name} <input type="checkbox" id="selected" />
              </li>
              <li>Type 1: {poke['Type 1']}</li>
              <li>Type 2: {poke['Type 2']}</li>
              <li>Total: {poke.Total}</li>
              <li>HP: {poke.HP}</li>
              <li>Attack: {poke.Attack}</li>
              <li>Defense: {poke.Defense}</li>
              <li>Special Attack: {poke['Sp Atk']}</li>
              <li>Special Defense: {poke['Sp Def']}</li>
              <li>Speed: {poke.Speed}</li>
              <li>Generation: {poke.Generation}</li>
              <li>Legendary: {poke.Legendary}</li>
            </ul>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon
});

export default connect(
  mapStateToProps,
  {}
)(PokemonList);
