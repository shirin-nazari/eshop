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
  },
});

export const { addBasket, deleteBasket } = AddBasket.actions;
export default AddBasket.reducer;
