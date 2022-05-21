import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import TextFields from '../component/textField/TextField';
import Button from '../component/button/Button';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { auth } from './firebase';

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '10vw',
  textAlign: 'center',
  padding: 2,
  color: 'black',
  textDecorationLine: 'none',
}));
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate.push('/');
      })
      .catch((err) => alert(err.massage));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) navigate.push('/');
      })
      .catch((err) => alert(err.massage));
  };
  return (
    <div style={{ margin: '8rem', textAlign: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo className="logo">
          <StoreIcon fontSize="large" />
          <Typography variant="h5" component="h2">
            eShop
          </Typography>
        </Logo>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography component="h2" variant="h2">
          SIGN IN
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
            padding: 4,
            textAlign: 'center',
          }}
        >
          <TextFields
            nameInput="email"
            handleChange={(e) => setEmail(e.target.value)}
            valueInput={email}
            variantInput="filled"
            typeInput="email"
            styleInput={{ margin: 2 }}
            placeholderInput="please your email"
            labelInput="email"
            idInput={1}
          />
          <TextFields
            nameInput="password"
            handleChange={(e) => setPassword(e.target.value)}
            valueInput={password}
            variantInput="filled"
            typeInput="password"
            styleInput={{ margin: 2 }}
            placeholderInput="please your password"
            labelInput="password"
            idInput={2}
          />
          <Button
            variant="contained"
            extraStyle={{ width: '10%', marginLeft: 60 }}
            handleClick={signIn}
          >
            Sign In
          </Button>
          <p>
            By signing-in you agree to the eShop Website Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <Button
            variant="contained"
            extraStyle={{ width: '30%', marginLeft: 50 }}
            handleClick={register}
          >
            Create your eShop Account
          </Button>
        </div>
      </div>
    </div>
  );
}
