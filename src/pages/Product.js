import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Card from '../component/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/data/dataSlice';
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
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <BoxCard>
        {data?.data.map(
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
