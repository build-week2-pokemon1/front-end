import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { pokeSelect } from '../actions';

const PokemonList = props => {
  console.log('SELECTED', props);
  return (
    <>
      <SearchBar />
      {!props.selected ? null : (
        <button onClick={props.pokeCompare}>Compare Pokemon</button>
      )}

      <ul>
        {props.pokemon.map(poke => {
          return (
            <ul key={poke.Name}>
              <li>
                Name: {poke.Name}{' '}
                <input
                  onClick={() => props.pokeSelect(poke)}
                  type="checkbox"
                  id="selected"
                />
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
  pokemon: state.pokemonReducer.pokemon,
  selected: state.pokemonReducer.selected
});

export default connect(
  mapStateToProps,
  { pokeSelect }
)(PokemonList);
