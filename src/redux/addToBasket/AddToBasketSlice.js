import { createSlice } from '@reduxjs/toolkit';

const AddBasket = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addBasket(state, { payload: { item } }) {
      state.push(...state.basket, item);
    },
    deleteBasket(state, { payload: id }) {
      state.slice(id, 1);
    },
  },
});

export const { addBasket, deleteBasket } = AddBasket.actions;
export default AddBasket.reducer;
