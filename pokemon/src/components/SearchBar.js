import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchPokemon } from '../actions';

const SearchBar = props => {
    const [search, setSearch] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.searchPokemon(search)
            setSearch('');
        }}>
            <input type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="&#x1F50D;Search"/>
            <button >click me</button>
        </form>
    );
};

const mapStateToProps = state => ({
    pokemon: state.pokemonReducer.pokemon
  });

export default connect(mapStateToProps, { searchPokemon })(SearchBar);