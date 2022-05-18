import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import TextFields from '../component/textField/TextField';
import Buttons from '../component/button/Button';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '10vw',
  textAlign: 'center',
  padding: 2,
  color: 'white',
  textDecorationLine: 'none',
}));
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo className="logo">
          <StoreIcon fontSize="large" />
          <Typography variant="h5" component="h2">
            eShop
          </Typography>
        </Logo>
      </Link>
      <div>
        <Typography component="h2" variant="h2">
          SIGN IN
        </Typography>
        <form>
          <TextFields
            nameInput="email"
            handleChange={(e) => setEmail(e.target.value)}
            valueInput={email}
            variantInput="filled"
            typeInput="email"
            sx={{ padding: 1 }}
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
            sx={{ padding: 1 }}
            placeholderInput="please your password"
            labelInput="password"
            idInput={2}
          />
          <Buttons variant="filled">Sign In</Buttons>
          <p>
            By signing-in you agree to the eShop Website Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <Buttons variant="filled">Create your eShop Account</Buttons>
        </form>
      </div>
    </div>
  );
}
