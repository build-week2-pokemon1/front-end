import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchPokemon } from '../actions';
import styled from 'styled-components';

const SearchBar = props => {
  const [search, setSearch] = useState('');

  return (
    <form>
      <Input1
        type="text"
        onChange={e => {
          e.preventDefault();
          setSearch(e.target.value);
          props.searchPokemon(e.target.value);
        }}
        onKeyPress={e => {
          if (e.which === 13) {
            e.preventDefault();
          }
        }}
        value={search}
        placeholder="&#x1F50D;Search"
      />
    </form>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon
});

const Input1 = styled.input`
  font-family: 'Sniglet', cursive;
  padding-top: 30px;
  border-style: none;
  font-size: 30px;
  font-weight: bold;
  display: block;
  text-align: center;
  margin: 10px auto;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 2px 7px 28px -1px rgba(13, 79, 186, 0.7);

  border-bottom: 1px solid black;
  background-color: white;
`;

export default connect(
  mapStateToProps,
  { searchPokemon }
)(SearchBar);
