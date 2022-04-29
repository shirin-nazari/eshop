import { AppBar, Box, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import { styled } from '@mui/material/styles';
import SearchBar from '../searchBar/Search';

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#383838',
  display: 'flex',
}));
const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
}));
const NavbarItem = styled(Box)(({ theme }) => ({
  display: 'flex',
}));
export default function Navbar() {
  return (
    <AppBarStyle>
      <Logo className="logo">
        <StoreIcon fontSize="large" />
        <Typography>eShop</Typography>
      </Logo>

      <SearchBar />

      <NavbarItem className="nav" component="nav">
        <Typography>Hello Guest Sign in</Typography>
        <Typography>your Shop</Typography>
        <AddShoppingCartIcon fontSize="large" />
        <span>0</span>
      </NavbarItem>
    </AppBarStyle>
  );
}
