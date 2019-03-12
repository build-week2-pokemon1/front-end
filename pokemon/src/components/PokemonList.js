import React from "react";
import { connect } from 'react-redux'
import Pokemon from './Pokemon'



const PokemonList = props => {
  return (
    props.pokemon.map(poke => <Pokemon key={poke.name} pokemon={poke} />)
  )
}
        

const mapStateToProps = state => ({
    pokemon : state.pokemonReducer.pokemon
})

export default connect(mapStateToProps, {})(PokemonList);