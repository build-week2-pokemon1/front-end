import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../img/login.png';
import PokeBall from '../img/Balls.png';
import './Login.css';

const LoginPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      {props.error && <h3>{props.error}</h3>}
      <form
        onSubmit={e => {
          e.preventDefault();
          props.login({ username, password }).then(() => {
            props.history.push('/pokemonList');
          });
          setUsername('');
          setPassword('');
        }}
      >
        <Input1
          type="text"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
          name="username"
          value={username}
        />

        <Input2
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
        />

        <Button1 type="submit">
          <LoginImg src={Login} alt="" />
        </Button1>
      </form>
    </div>
  );
};

const Input1 = styled.input`
  padding-top: 30px;
  border-style: none;
  font-size: 30px;
  font-weight: bold;
  display: block;
  text-align: center;
  margin: 0 auto;

  border-bottom: 1px solid black;
  background-color: white;
  box-shadow: 2px 7px 28px -1px rgba(13, 79, 186, 0.7);
  border-radius: 5px;
  font-family: 'Sniglet', cursive;
`;

const Input2 = styled.input`
  border-style: none;
  font-size: 30px;
  font-weight: bold;
  margin-left: 90px;
  text-align: center;
  border-bottom: 1px solid black;
  background-color: white;
  box-shadow: 2px 7px 28px -1px rgba(13, 79, 186, 0.7);
  margin-top: 10px;
  padding-top: 25px;
  border-radius: 5px;
  font-family: 'Sniglet', cursive;
`;

const Button1 = styled.button`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  border-style: none;
  background-image: url(${PokeBall});
  background-size: cover;
  background-color: lightblue;
  margin: 10px;
`;

const LoginImg = styled.img`
  width: 50px;
`;

export default withRouter(LoginPage);
