import React from 'react'

const Pokemon = props => {
    return (
        <div className='pokemon'>
                <h4>Name: {props.pokemon.Name}</h4>
                <h5>Type 1: {props.pokemon["Type 1"]}</h5>
                <h5>Type 2: {props.pokemon["Type 2"]}</h5>
                <h5>Total: {props.pokemon.Total}</h5>
                <h5>HP: {props.pokemon.HP}</h5>
                <h5>Attack: {props.pokemon.Attack}</h5>
                <h5>Defense: {props.pokemon.Defense}</h5>
                <h5>Special Attack: {props.pokemon["Sp Atk"]}</h5>
                <h5>Special Defense: {props.pokemon["Sp Def"]}</h5>
                <h5>Speed: {props.pokemon.Speed}</h5>
                <h5>Generation: {props.pokemon.Generation}</h5>
                <h5>Legendary: {`${props.pokemon.Legendary}`} </h5>
        </div>
    )
}

export default Pokemon