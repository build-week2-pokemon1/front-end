import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import PokeBall from '../img/Balls.png';
import SignUp from '../img/signup.png';

import './SignupVIew.css';

const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.signup({ username, password }).then(() => {
            props.history.push('/Login');
          });
          setUsername('');
          setPassword('');
        }}
      >
        {props.error && <h3>{props.error}</h3>}
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
          <SignUpImg src={SignUp} alt="signUp" />
        </Button1>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Input1 = styled.input`
  padding-top: 30px;
  border-style: none;
  font-size: 30px;
  font-weight: bold;
  display: block;
  text-align: center;
  margin: 0 auto;
  border-bottom: 1px solid black;
`;

const Input2 = styled.input`
  border-style: none;
  font-size: 30px;
  font-weight: bold;
  margin-left: 90px;
  text-align: center;
  border-bottom: 1px solid black;
`;

const Button1 = styled.button`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  border-style: none;
  background-image: url(${PokeBall});
  background-size: cover;
  background-color: white;
  margin: 10px;
`;

const SignUpImg = styled.img`
  width: 50px;
`;


export default withRouter(Signup);
