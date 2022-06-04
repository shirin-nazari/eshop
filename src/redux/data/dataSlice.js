import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dataFile from '../../data.json';
export const fetchData = createAsyncThunk('data', async () => {
  // return await fetch('https://fakestoreapi.com/products/')
  //   .then((res) => res.json())
  //   .catch((err) => console.log('Error ::', err));
  // return await fetch(dataFile)
  return await fetch(dataFile)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success (:';
    },
    [fetchData.pending]: (state) => {
      state.status = 'loading ....';
    },
    [fetchData.rejected]: (state) => {
      state.status = 'rejected I want you to try again ):';
    },
  },
});

export default dataSlice.reducer;
