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
  padding-top: 30px;
  border-style: none;
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  margin: 0 auto;

  border-bottom: 1px solid black;
`;

export default connect(
  mapStateToProps,
  { searchPokemon }
)(SearchBar);
