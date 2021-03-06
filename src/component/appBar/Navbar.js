import { AppBar, Box, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchBar from '../searchBar/Search';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { searchHandle } from '../../redux/searchCard/seachSlice';
import { searchHandle } from '../../redux/data/dataSlice';
const AppBarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#383838',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 20,
  //   for lg, large: 1200px
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap',
    textAlign: 'center',
    padding: 10,
  },
  //   for md, medium: 900px
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 3,
  },
  //   for sm, small: 600px

  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    padding: 1,
  },
}));
const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '10vw',
  textAlign: 'center',
  padding: 2,
  color: 'white',
  textDecorationLine: 'none',
}));
const NavbarItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '20vw',
  textAlign: 'center',
}));
const SearchBarInput = styled(Box)(({ theme }) => ({
  width: '60vw',
  [theme.breakpoints.down('md')]: {
    width: '40vw',
  },
}));
export default function Navbar() {
  // const [number, setNumber] = useState(0);
  const [searchResult, setSearchResult] = useState('');
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const data = useSelector((state) => state.data);

  const handleSearch = () => {
    if (searchResult) {
      const matchedData = data.data.filter((item) =>
        item.title.toLowerCase().includes(searchResult.toLowerCase())
      );
      dispatch(searchHandle(matchedData));
    }
  };
  // useEffect(() => {
  //   dispatch(searchHandle(searchResult));
  // });
  return (
    <AppBarStyle>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo className="logo">
          <StoreIcon fontSize="large" />
          <Typography variant="h5" component="h2">
            eShop
          </Typography>
        </Logo>
      </Link>

      <SearchBarInput className="searchBar">
        <SearchBar
          valueInput={searchResult}
          onChangeInput={(e) => {
            setSearchResult(e.target.value);
            handleSearch();
          }}
        />
      </SearchBarInput>

      <NavbarItem className="nav" component="nav">
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          <Box>
            <Typography>Hello Guest </Typography>
            <Typography>Sign in</Typography>
          </Box>
        </Link>

        <Typography>your Shop</Typography>
        <Link to="/checkout">
          <Box color="white">
            <AddShoppingCartIcon fontSize="large" />
            <span>{basket.length}</span>
          </Box>
        </Link>
      </NavbarItem>
    </AppBarStyle>
  );
}
