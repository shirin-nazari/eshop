import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import TextFields from '../component/textField/TextField';
import Button from '../component/button/Button';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '10vw',
  textAlign: 'center',
  padding: 2,
  color: 'black',
  textDecorationLine: 'none',
}));
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            margin: 10,
            padding: 11,
          }}
        >
          <TextFields
            nameInput="email"
            handleChange={(e) => setEmail(e.target.value)}
            valueInput={email}
            variantInput="filled"
            typeInput="email"
            sx={{ padding: 20, margin: 5 }}
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
            sx={{ padding: 40, margin: 5 }}
            placeholderInput="please your password"
            labelInput="password"
            idInput={2}
          />
          <Button variant="filled">Sign In</Button>
          <p>
            By signing-in you agree to the eShop Website Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <Button variant="filled">Create your eShop Account</Button>
        </div>
      </div>
    </div>
  );
}
