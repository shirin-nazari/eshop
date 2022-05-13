import { configureStore } from '@reduxjs/toolkit';
import dataRducer from './data/dataSlice';
import AddToBasketSliceReducer from './addToBasket/AddToBasketSlice';
export const store = configureStore({
  reducer: {
    data: dataRducer,
    basket: AddToBasketSliceReducer,
  },
});
