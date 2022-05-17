import { createSlice } from '@reduxjs/toolkit';

const AddBasket = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addBasket(state, { payload }) {
      state.push(payload);
    },
    deleteBasket(state, { payload: index }) {
      state.splice(index, 1);
    },
    getBasketTotal(state, { payload: basket }) {
      state?.reduce((amount, basket) => basket.price + amount, 0);
    },
  },
});

export const { addBasket, deleteBasket, getBasketTotal } = AddBasket.actions;
export default AddBasket.reducer;
