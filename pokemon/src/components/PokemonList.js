import React from "react";
import { connect } from 'react-redux'
import Pokemon from './Pokemon'



const PokemonList = props => {
  return (
    <div className="pokemonContainer">
      {(props.filtered.length !== 0)
        ? props.filtered.map(poke => <Pokemon key={poke.Name} pokemon={poke} />) 
        : props.pokemon.map(poke => <Pokemon key={poke.Name} pokemon={poke} />)
         }
    </div>
    
  )
}
        

const mapStateToProps = state => ({
    pokemon : state.pokemonReducer.pokemon,
    filtered : state.pokemonReducer.filtered
})

export default connect(mapStateToProps, {})(PokemonList);