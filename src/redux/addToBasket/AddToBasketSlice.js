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
      // state.findIndex((item) => item.id === index.id);
    },
  },
});

export const { addBasket, deleteBasket } = AddBasket.actions;
export default AddBasket.reducer;
