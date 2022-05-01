import { styled } from '@mui/material/styles';
import { Box, display } from '@mui/system';
import React from 'react';
import Card from '../component/card/Card';
const BoxCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  textAlign: 'center',
  margin: 6,
}));
function Product() {
  return (
    <>
      <BoxCard>
        <Card />
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </BoxCard>
    </>
  );
}

export default Product;
