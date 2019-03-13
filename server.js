const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token = 'hFT4yc823l5dJ5QYvY84B4fjUh3HmTVfidjrf9kr9Q8cL88mW2F4dSDejEn5nP5oyeU2rPWUIt5l88O7';

let nextId = 6;

let pokemon = [
  {
    "Num": 1,
    "Name": "Bulbasaur",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 318,
    "HP": 45,
    "Attack": 49,
    "Defense": 49,
    "Sp Atk": 65,
    "Sp Def": 65,
    "Speed": 45,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "Num": 2,
    "Name": "Ivysaur",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 405,
    "HP": 60,
    "Attack": 62,
    "Defense": 63,
    "Sp Atk": 80,
    "Sp Def": 80,
    "Speed": 60,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    "Num": 3,
    "Name": "Venusaur",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 525,
    "HP": 80,
    "Attack": 82,
    "Defense": 83,
    "Sp Atk": 100,
    "Sp Def": 100,
    "Speed": 80,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    "Num": 3,
    "Name": "VenusaurMega Venusaur",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 625,
    "HP": 80,
    "Attack": 100,
    "Defense": 123,
    "Sp Atk": 122,
    "Sp Def": 120,
    "Speed": 80,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png"
  },
  {
    "Num": 4,
    "Name": "Charmander",
    "Type 1": "Fire",
    "Type 2": "",
    "Total": 309,
    "HP": 39,
    "Attack": 52,
    "Defense": 43,
    "Sp Atk": 60,
    "Sp Def": 50,
    "Speed": 65,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "Num": 5,
    "Name": "Charmeleon",
    "Type 1": "Fire",
    "Type 2": "",
    "Total": 405,
    "HP": 58,
    "Attack": 64,
    "Defense": 58,
    "Sp Atk": 80,
    "Sp Def": 65,
    "Speed": 80,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    "Num": 6,
    "Name": "Charizard",
    "Type 1": "Fire",
    "Type 2": "Flying",
    "Total": 534,
    "HP": 78,
    "Attack": 84,
    "Defense": 78,
    "Sp Atk": 109,
    "Sp Def": 85,
    "Speed": 100,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    "Num": 6,
    "Name": "CharizardMega Charizard X",
    "Type 1": "Fire",
    "Type 2": "Dragon",
    "Total": 634,
    "HP": 78,
    "Attack": 130,
    "Defense": 111,
    "Sp Atk": 130,
    "Sp Def": 85,
    "Speed": 100,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png"
  },
  {
    "Num": 6,
    "Name": "CharizardMega Charizard Y",
    "Type 1": "Fire",
    "Type 2": "Flying",
    "Total": 634,
    "HP": 78,
    "Attack": 104,
    "Defense": 78,
    "Sp Atk": 159,
    "Sp Def": 115,
    "Speed": 100,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png"
  },
  {
    "Num": 7,
    "Name": "Squirtle",
    "Type 1": "Water",
    "Type 2": "",
    "Total": 314,
    "HP": 44,
    "Attack": 48,
    "Defense": 65,
    "Sp Atk": 50,
    "Sp Def": 64,
    "Speed": 43,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "Num": 8,
    "Name": "Wartortle",
    "Type 1": "Water",
    "Type 2": "",
    "Total": 405,
    "HP": 59,
    "Attack": 63,
    "Defense": 80,
    "Sp Atk": 65,
    "Sp Def": 80,
    "Speed": 58,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    "Num": 9,
    "Name": "Blastoise",
    "Type 1": "Water",
    "Type 2": "",
    "Total": 530,
    "HP": 79,
    "Attack": 83,
    "Defense": 100,
    "Sp Atk": 85,
    "Sp Def": 105,
    "Speed": 78,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    "Num": 9,
    "Name": "BlastoiseMega Blastoise",
    "Type 1": "Water",
    "Type 2": "",
    "Total": 630,
    "HP": 79,
    "Attack": 103,
    "Defense": 120,
    "Sp Atk": 135,
    "Sp Def": 115,
    "Speed": 78,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png"
  },
  {
    "Num": 10,
    "Name": "Caterpie",
    "Type 1": "Bug",
    "Type 2": "",
    "Total": 195,
    "HP": 45,
    "Attack": 30,
    "Defense": 35,
    "Sp Atk": 20,
    "Sp Def": 20,
    "Speed": 45,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    "Num": 11,
    "Name": "Metapod",
    "Type 1": "Bug",
    "Type 2": "",
    "Total": 205,
    "HP": 50,
    "Attack": 20,
    "Defense": 55,
    "Sp Atk": 25,
    "Sp Def": 25,
    "Speed": 30,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    "Num": 12,
    "Name": "Butterfree",
    "Type 1": "Bug",
    "Type 2": "Flying",
    "Total": 395,
    "HP": 60,
    "Attack": 45,
    "Defense": 50,
    "Sp Atk": 90,
    "Sp Def": 80,
    "Speed": 70,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    "Num": 13,
    "Name": "Weedle",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Total": 195,
    "HP": 40,
    "Attack": 35,
    "Defense": 30,
    "Sp Atk": 20,
    "Sp Def": 20,
    "Speed": 50,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    "Num": 14,
    "Name": "Kakuna",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Total": 205,
    "HP": 45,
    "Attack": 25,
    "Defense": 50,
    "Sp Atk": 25,
    "Sp Def": 25,
    "Speed": 35,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    "Num": 15,
    "Name": "Beedrill",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Total": 395,
    "HP": 65,
    "Attack": 90,
    "Defense": 40,
    "Sp Atk": 45,
    "Sp Def": 80,
    "Speed": 75,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    "Num": 15,
    "Name": "BeedrillMega Beedrill",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Total": 495,
    "HP": 65,
    "Attack": 150,
    "Defense": 40,
    "Sp Atk": 15,
    "Sp Def": 80,
    "Speed": 145,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png"
  },
  {
    "Num": 16,
    "Name": "Pidgey",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Total": 251,
    "HP": 40,
    "Attack": 45,
    "Defense": 40,
    "Sp Atk": 35,
    "Sp Def": 35,
    "Speed": 56,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    "Num": 17,
    "Name": "Pidgeotto",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Total": 349,
    "HP": 63,
    "Attack": 60,
    "Defense": 55,
    "Sp Atk": 50,
    "Sp Def": 50,
    "Speed": 71,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    "Num": 18,
    "Name": "Pidgeot",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Total": 479,
    "HP": 83,
    "Attack": 80,
    "Defense": 75,
    "Sp Atk": 70,
    "Sp Def": 70,
    "Speed": 101,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    "Num": 18,
    "Name": "PidgeotMega Pidgeot",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Total": 579,
    "HP": 83,
    "Attack": 80,
    "Defense": 80,
    "Sp Atk": 135,
    "Sp Def": 80,
    "Speed": 121,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png"
  },
  {
    "Num": 19,
    "Name": "Rattata",
    "Type 1": "Normal",
    "Type 2": "",
    "Total": 253,
    "HP": 30,
    "Attack": 56,
    "Defense": 35,
    "Sp Atk": 25,
    "Sp Def": 35,
    "Speed": 72,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    "Num": 20,
    "Name": "Raticate",
    "Type 1": "Normal",
    "Type 2": "",
    "Total": 413,
    "HP": 55,
    "Attack": 81,
    "Defense": 60,
    "Sp Atk": 50,
    "Sp Def": 70,
    "Speed": 97,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
    "Num": 21,
    "Name": "Spearow",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Total": 262,
    "HP": 40,
    "Attack": 60,
    "Defense": 30,
    "Sp Atk": 31,
    "Sp Def": 31,
    "Speed": 70,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
    "Num": 22,
    "Name": "Fearow",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Total": 442,
    "HP": 65,
    "Attack": 90,
    "Defense": 65,
    "Sp Atk": 61,
    "Sp Def": 61,
    "Speed": 100,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
    "Num": 23,
    "Name": "Ekans",
    "Type 1": "Poison",
    "Type 2": "",
    "Total": 288,
    "HP": 35,
    "Attack": 60,
    "Defense": 44,
    "Sp Atk": 40,
    "Sp Def": 54,
    "Speed": 55,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
    "Num": 24,
    "Name": "Arbok",
    "Type 1": "Poison",
    "Type 2": "",
    "Total": 438,
    "HP": 60,
    "Attack": 85,
    "Defense": 69,
    "Sp Atk": 65,
    "Sp Def": 79,
    "Speed": 80,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
    "Num": 25,
    "Name": "Pikachu",
    "Type 1": "Electric",
    "Type 2": "",
    "Total": 320,
    "HP": 35,
    "Attack": 55,
    "Defense": 40,
    "Sp Atk": 50,
    "Sp Def": 50,
    "Speed": 90,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    "Num": 26,
    "Name": "Raichu",
    "Type 1": "Electric",
    "Type 2": "",
    "Total": 485,
    "HP": 60,
    "Attack": 90,
    "Defense": 55,
    "Sp Atk": 90,
    "Sp Def": 80,
    "Speed": 110,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    "Num": 27,
    "Name": "Sandshrew",
    "Type 1": "Ground",
    "Type 2": "",
    "Total": 300,
    "HP": 50,
    "Attack": 75,
    "Defense": 85,
    "Sp Atk": 20,
    "Sp Def": 30,
    "Speed": 40,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
    "Num": 28,
    "Name": "Sandslash",
    "Type 1": "Ground",
    "Type 2": "",
    "Total": 450,
    "HP": 75,
    "Attack": 100,
    "Defense": 110,
    "Sp Atk": 45,
    "Sp Def": 55,
    "Speed": 65,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
    "Num": 29,
    "Name": "Nidoran‚ôÄ",
    "Type 1": "Poison",
    "Type 2": "",
    "Total": 275,
    "HP": 55,
    "Attack": 47,
    "Defense": 52,
    "Sp Atk": 40,
    "Sp Def": 40,
    "Speed": 41,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
    "Num": 30,
    "Name": "Nidorina",
    "Type 1": "Poison",
    "Type 2": "",
    "Total": 365,
    "HP": 70,
    "Attack": 62,
    "Defense": 67,
    "Sp Atk": 55,
    "Sp Def": 55,
    "Speed": 56,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
    "Num": 31,
    "Name": "Nidoqueen",
    "Type 1": "Poison",
    "Type 2": "Ground",
    "Total": 505,
    "HP": 90,
    "Attack": 92,
    "Defense": 87,
    "Sp Atk": 75,
    "Sp Def": 85,
    "Speed": 76,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
    "Num": 32,
    "Name": "Nidoran‚ôÇ",
    "Type 1": "Poison",
    "Type 2": "",
    "Total": 273,
    "HP": 46,
    "Attack": 57,
    "Defense": 40,
    "Sp Atk": 40,
    "Sp Def": 40,
    "Speed": 50,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
    "Num": 33,
    "Name": "Nidorino",
    "Type 1": "Poison",
    "Type 2": "",
    "Total": 365,
    "HP": 61,
    "Attack": 72,
    "Defense": 57,
    "Sp Atk": 55,
    "Sp Def": 55,
    "Speed": 65,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
    "Num": 34,
    "Name": "Nidoking",
    "Type 1": "Poison",
    "Type 2": "Ground",
    "Total": 505,
    "HP": 81,
    "Attack": 102,
    "Defense": 77,
    "Sp Atk": 85,
    "Sp Def": 75,
    "Speed": 85,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
    "Num": 35,
    "Name": "Clefairy",
    "Type 1": "Fairy",
    "Type 2": "",
    "Total": 323,
    "HP": 70,
    "Attack": 45,
    "Defense": 48,
    "Sp Atk": 60,
    "Sp Def": 65,
    "Speed": 35,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
    "Num": 36,
    "Name": "Clefable",
    "Type 1": "Fairy",
    "Type 2": "",
    "Total": 483,
    "HP": 95,
    "Attack": 70,
    "Defense": 73,
    "Sp Atk": 95,
    "Sp Def": 90,
    "Speed": 60,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
    "Num": 37,
    "Name": "Vulpix",
    "Type 1": "Fire",
    "Type 2": "",
    "Total": 299,
    "HP": 38,
    "Attack": 41,
    "Defense": 40,
    "Sp Atk": 50,
    "Sp Def": 65,
    "Speed": 65,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
    "Num": 38,
    "Name": "Ninetales",
    "Type 1": "Fire",
    "Type 2": "",
    "Total": 505,
    "HP": 73,
    "Attack": 76,
    "Defense": 75,
    "Sp Atk": 81,
    "Sp Def": 100,
    "Speed": 100,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
    "Num": 39,
    "Name": "Jigglypuff",
    "Type 1": "Normal",
    "Type 2": "Fairy",
    "Total": 270,
    "HP": 115,
    "Attack": 45,
    "Defense": 20,
    "Sp Atk": 45,
    "Sp Def": 25,
    "Speed": 20,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    "Num": 40,
    "Name": "Wigglytuff",
    "Type 1": "Normal",
    "Type 2": "Fairy",
    "Total": 435,
    "HP": 140,
    "Attack": 70,
    "Defense": 45,
    "Sp Atk": 85,
    "Sp Def": 50,
    "Speed": 45,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
    "Num": 41,
    "Name": "Zubat",
    "Type 1": "Poison",
    "Type 2": "Flying",
    "Total": 245,
    "HP": 40,
    "Attack": 45,
    "Defense": 35,
    "Sp Atk": 30,
    "Sp Def": 40,
    "Speed": 55,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
    "Num": 42,
    "Name": "Golbat",
    "Type 1": "Poison",
    "Type 2": "Flying",
    "Total": 455,
    "HP": 75,
    "Attack": 80,
    "Defense": 70,
    "Sp Atk": 65,
    "Sp Def": 75,
    "Speed": 90,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
    "Num": 43,
    "Name": "Oddish",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 320,
    "HP": 45,
    "Attack": 50,
    "Defense": 55,
    "Sp Atk": 75,
    "Sp Def": 65,
    "Speed": 30,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
    "Num": 44,
    "Name": "Gloom",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 395,
    "HP": 60,
    "Attack": 65,
    "Defense": 70,
    "Sp Atk": 85,
    "Sp Def": 75,
    "Speed": 40,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
    "Num": 45,
    "Name": "Vileplume",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Total": 490,
    "HP": 75,
    "Attack": 80,
    "Defense": 85,
    "Sp Atk": 110,
    "Sp Def": 90,
    "Speed": 50,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
    "Num": 46,
    "Name": "Paras",
    "Type 1": "Bug",
    "Type 2": "Grass",
    "Total": 285,
    "HP": 35,
    "Attack": 70,
    "Defense": 55,
    "Sp Atk": 45,
    "Sp Def": 55,
    "Speed": 25,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
    "Num": 47,
    "Name": "Parasect",
    "Type 1": "Bug",
    "Type 2": "Grass",
    "Total": 405,
    "HP": 60,
    "Attack": 95,
    "Defense": 80,
    "Sp Atk": 60,
    "Sp Def": 80,
    "Speed": 30,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
    "Num": 48,
    "Name": "Venonat",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Total": 305,
    "HP": 60,
    "Attack": 55,
    "Defense": 50,
    "Sp Atk": 40,
    "Sp Def": 55,
    "Speed": 45,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
    "Num": 49,
    "Name": "Venomoth",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Total": 450,
    "HP": 70,
    "Attack": 65,
    "Defense": 60,
    "Sp Atk": 90,
    "Sp Def": 75,
    "Speed": 90,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
    "Num": 50,
    "Name": "Diglett",
    "Type 1": "Ground",
    "Type 2": "",
    "Total": 265,
    "HP": 10,
    "Attack": 55,
    "Defense": 25,
    "Sp Atk": 35,
    "Sp Def": 45,
    "Speed": 95,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
    "Num": 51,
    "Name": "Dugtrio",
    "Type 1": "Ground",
    "Type 2": "",
    "Total": 405,
    "HP": 35,
    "Attack": 80,
    "Defense": 50,
    "Sp Atk": 50,
    "Sp Def": 70,
    "Speed": 120,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
    "Num": 52,
    "Name": "Meowth",
    "Type 1": "Normal",
    "Type 2": "",
    "Total": 290,
    "HP": 40,
    "Attack": 45,
    "Defense": 35,
    "Sp Atk": 40,
    "Sp Def": 40,
    "Speed": 90,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
    "Num": 53,
    "Name": "Persian",
    "Type 1": "Normal",
    "Type 2": "",
    "Total": 440,
    "HP": 65,
    "Attack": 70,
    "Defense": 60,
    "Sp Atk": 65,
    "Sp Def": 65,
    "Speed": 115,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
    "Num": 54,
    "Name": "Psyduck",
    "Type 1": "Water",
    "Type 2": "",
    "Total": 320,
    "HP": 50,
    "Attack": 52,
    "Defense": 48,
    "Sp Atk": 65,
    "Sp Def": 50,
    "Speed": 55,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
    "Num": 55,
    "Name": "Golduck",
    "Type 1": "Water",
    "Type 2": "",
    "Total": 500,
    "HP": 80,
    "Attack": 82,
    "Defense": 78,
    "Sp Atk": 95,
    "Sp Def": 80,
    "Speed": 85,
    "Generation": 1,
    "Legendary": false,
    "Img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  }
 ];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Pokemon Master' && password === 'ash') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/pokemon', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(pokemon);
  }, 1000);
});

app.get('/api/pokemon/:id', authenticator, (req, res) => {
  const pokemon = pokemon.find(f => f.id == req.params.id);

  if (pokemon) {
    res.status(200).json(pokemon);
  } else {
    res.status(404).send({ msg: 'Pokemon not found' });
  }
});

app.post('/api/pokemon', authenticator, (req, res) => {
  const pokemon = { id: getNextId(), ...req.body };

  pokemon = [...pokemon, pokemon];

  res.send(pokemon);
});

app.put('/api/pokemon/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const pokemonIndex = pokemon.findIndex(f => f.id == id);

  if (pokemonIndex > -1) {
    const pokemon = { ...pokemon[pokemonIndex], ...req.body };

    pokemon = [
      ...pokemon.slice(0, pokemonIndex),
      pokemon,
      ...pokemon.slice(pokemonIndex + 1)
    ];
    res.send(pokemon);
  } else {
    res.status(404).send({ msg: 'Pokemon not found' });
  }
});

app.delete('/api/pokemon/:id', authenticator, (req, res) => {
  const { id } = req.params;

  pokemon = pokemon.filter(f => f.id !== Number(id));

  res.send(pokemon);
});

function getNextId() {
  return ++nextId;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
