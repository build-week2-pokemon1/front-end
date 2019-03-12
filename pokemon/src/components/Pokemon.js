import React from 'react'

const Pokemon = props => {
    return (
        <div className='pokemon'>
                <p>Name: {props.pokemon.Name}</p>
                <p>Type 1: {props.pokemon["Type 1"]}</p>
                <p>Type 2: {props.pokemon["Type 2"]}</p>
                <p>Total: {props.pokemon.Total}</p>
                <p>HP: {props.pokemon.HP}</p>
                <p>Attack: {props.pokemon.Attack}</p>
                <p>Defense: {props.pokemon.Defense}</p>
                <p>Special Attack: {props.pokemon["Sp Atk"]}</p>
                <p>Special Defense: {props.pokemon["Sp Def"]}</p>
                <p>Speed: {props.pokemon.Speed}</p>
                <p>Generation: {props.pokemon.Generation}</p>
                <p>Legendary: {props.pokemon.Legendary}</p>
        </div>
    )
}

export default Pokemon