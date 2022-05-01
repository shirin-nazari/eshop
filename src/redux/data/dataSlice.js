import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data', async () => {
  return await fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('Error ::', err));
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
