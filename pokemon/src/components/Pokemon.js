import React from 'react';
import styled from 'styled-components';
import PokeBallCard from '../img/pokeballcard.png';

const IndPokemon = styled.div`
  position: relative;
  border: 2px solid black;
  width: 80%;
  height: 150px;
  margin: 5px;
  padding: 10px;
  overflow: hidden;

  background-color: white;
  box-shadow: 2px 7px 28px -1px rgba(13, 79, 186, 0.7);

  &:hover {
      transform: scale(1.05);
  }
`
;
const TopRow = styled.div`
  display: flex;
  height: 20%;
  flex-flow: row nowrap;
  justify-content: space-evenly;
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
  /* border: 1px solid red; */
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
    /* background: ${props => (props.type === 'Grass' ? 'green' : 'pink')}  */
    background: ${props => {
        if (props.type === 'Grass') {
            return 'lightgreen'
        } else if (props.type === 'Poison') {
            return 'purple'
        } else if (props.type === 'Water') {
            return 'blue'
        } else if (props.type === 'Fire') {
            return 'orange'
        } else if (props.type === 'Bug') {
            return 'pink'
        } else if (props.type === 'Normal') {
            return 'white'
        } else if (props.type === 'Flying' || props.type === 'Ice') {
            return 'Cyan'
        } else if (props.type === 'Electric') {
            return 'yellow'
        } else if (props.type === 'Ground') {
            return 'brown'
        } else if (props.type === 'Fairy') {
            return 'AliceBlue'
        } else if (props.type === 'Psychic') {
            return 'pink'
        } else if (props.type === 'Fighting') {
            return 'Coral'
        } else if (props.type === 'Rock') {
            return 'grey'
        } else if (props.type === 'Ghost') {
            return 'grey'
        } else if (props.type === 'Steel') {
            return 'grey'
        } else if (props.type === 'Dragon') {
            return 'red'
        }
    }}
    font-size:18px;
    border: ${props => (props.type === 'Normal' ? '1px solid black' : null)} 
    height: 30px;
    width: 70px;
    border-radius: 5px;
    color: black;
    text-align: center;
`

const Ph5 = styled.h5`
    font-weight: 400;
    color: ${ props => (props.speed >= 100 ? 'red' : null)};
    font-weight: ${ props => (props.speed >= 100 ? 800 : null)};

`


const Pokemon = props => {
  return (
    <IndPokemon>
      <PokeBallImg src={PokeBallCard} alt="pokeball" />
      
      <TopRow>
        <h2>{props.pokemon.Name}</h2>
        <TypeDiv type={props.pokemon['Type 1']}>{props.pokemon['Type 1']}</TypeDiv>
        {props.pokemon['Type 2'] &&  (
            <TypeDiv type={props.pokemon['Type 2']}>{props.pokemon['Type 2']}</TypeDiv>
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
          <Ph5><strong>Total: </strong>{props.pokemon.Total}</Ph5>
          <Ph5><strong>HP: </strong>{props.pokemon.HP}</Ph5>
          <Ph5><strong>Attack: </strong>{props.pokemon.Attack}</Ph5>
          <Ph5><strong>Defense: </strong>{props.pokemon.Defense}</Ph5>
          <Ph5><strong>Special Attack: </strong>{props.pokemon['Sp Atk']}</Ph5>
          <Ph5><strong>Special Defense: </strong> {props.pokemon['Sp Def']}</Ph5>
          <Ph5 speed={props.pokemon.Speed}><strong>Speed: </strong> {props.pokemon.Speed}</Ph5>
          <Ph5><strong>Generation: </strong> {props.pokemon.Generation}</Ph5>
          <Ph5><strong>Legendary: </strong> {`${props.pokemon.Legendary}`} </Ph5>
        </PokeStats>
      </BottomRow>
    </IndPokemon>
  );
};

export default Pokemon;
