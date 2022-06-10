import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/dataSlice';
import AddToBasketSliceReducer from './addToBasket/AddToBasketSlice';
import loginUserReducer from './login/LoginSlice';
// import SearchedReducer from './searchCard/seachSlice';
export const store = configureStore({
  reducer: {
    data: dataReducer,
    basket: AddToBasketSliceReducer,
    login: loginUserReducer,
    // searched: SearchedReducer,
  },
});
