import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchPokemon } from '../actions';

const SearchBar = props => {
    const [search, setSearch] = useState('');

    return (
        <form>
            <input 
                type="text"
                onChange={(e) => {
                    e.preventDefault()
                    setSearch(e.target.value)
                    props.searchPokemon(e.target.value)
                    
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

export default connect(mapStateToProps, { searchPokemon })(SearchBar);