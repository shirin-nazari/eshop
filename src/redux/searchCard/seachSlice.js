import { createSlice } from '@reduxjs/toolkit';
import dataSlice from '../data/dataSlice';

const Searched = createSlice({
  name: 'search',
  initialState: dataSlice,
  reducers: {
    searchHandle(state, { payload }) {
      state.data.filter((item) => item.includes(payload));
    },
  },
});
export const { searchHandle } = Searched.actions;
export default Searched.reducer;
