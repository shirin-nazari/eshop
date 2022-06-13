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
  const searched = useSelector((state) => state.data.searchData);
  console.log('search :', searched);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <BoxCard>
        {searched?.map(
          ({ category, title, id, description, image, price, rating }) => {
            return (
              <Card
                key={id}
                imageSrc={image}
                title={title}
                textDescription={description}
                price={price}
                category={category}
                rating={2}
              />
            );
          }
        )}
      </BoxCard>
    </>
  );
}

export default Product;
