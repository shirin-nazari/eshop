import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Card from '../component/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/data/dataSlice';
import { searchHandle } from '../redux/data/dataSlice';
const BoxCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  textAlign: 'center',
  margin: 6,
}));
function Product() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const searched = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <BoxCard>
        {searched.length > 1
          ? searched.data.map(
              ({ category, id, description, image, price, rating }) => {
                return (
                  <Card
                    key={id}
                    imageSrc={image}
                    title={category}
                    textDescription={description}
                    price={price}
                    rating={rating.rate}
                  />
                );
              }
            )
          : data.data.map(
              ({ category, id, description, image, price, rating }) => {
                return (
                  <Card
                    key={id}
                    imageSrc={image}
                    title={category}
                    textDescription={description}
                    price={price}
                    rating={rating.rate}
                  />
                );
              }
            )}
      </BoxCard>
    </>
  );
}

export default Product;
