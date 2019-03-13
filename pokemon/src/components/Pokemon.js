import React from 'react';
import styled from 'styled-components';
import PokeBallCard from '../img/pokeballcard.png';

const IndPokemon = styled.div`
  position: relative;

  border: 1px solid black;
  line-height: 0;
  width: 80%;
  height: 150px;
  text-align: center;
  margin: 5px;
  padding: 10px;
  overflow: hidden;
`;
const TopRow = styled.div`
  display: flex;
  height: 20%;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;
const BottomRow = styled.div`
  display: flex;
  height: 80%;
  justify-content: space-around;
`;
const PokeStats = styled.div`
  display: flex;
  width: 70%;
  flex-flow: column wrap;

  /* && {
        border: 1px solid black;
    } */
`;
const PokeBallImg = styled.img`
  position: absolute;
  left: -80px;
  opacity: 0.6;
  width: 20%;
  height: auto;
  overflow: hidden;
`;

const TypeDiv = styled.div`
    border: 1px solid black;
    background: ${props => (props.type === 'Grass' ? 'green' : 'pink')} 
    height: 20px;
    width: 40px;
    color: black;
    text-align: center;
`

const Pokemon = props => {
  return (
    <IndPokemon>
      <PokeBallImg src={PokeBallCard} alt="pokeball" />
      
      <TopRow>
        <h2>{props.pokemon.Name}</h2>
        <TypeDiv type={props.pokemon['Type 1']}>{props.pokemon['Type 1']}</TypeDiv>
        {props.pokemon['Type 2'] &&  (
            <TypeDiv>{props.pokemon['Type 2']}</TypeDiv>
        )}
        <TopRow>
          <h5>Compare</h5>
          <input
            onClick={() => props.pokeSelect(props.pokemon.Name)}
            type="checkbox"
            id="selected"
          />
        </TopRow>
      </TopRow>

      <BottomRow>
        <PokeStats>
          <h5>Type 1: {props.pokemon['Type 1']}</h5>
          <h5>Type 2: {props.pokemon['Type 2']}</h5>
          <h5>Total: {props.pokemon.Total}</h5>
          <h5>HP: {props.pokemon.HP}</h5>
          <h5>Attack: {props.pokemon.Attack}</h5>
          <h5>Defense: {props.pokemon.Defense}</h5>
          <h5>Special Attack: {props.pokemon['Sp Atk']}</h5>
          <h5>Special Defense: {props.pokemon['Sp Def']}</h5>
          <h5>Speed: {props.pokemon.Speed}</h5>
          <h5>Generation: {props.pokemon.Generation}</h5>
          <h5>Legendary: {`${props.pokemon.Legendary}`} </h5>
        </PokeStats>
      </BottomRow>
    </IndPokemon>
  );
};

export default Pokemon;
