import { createSlice } from '@reduxjs/toolkit';

const Searched = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    searchHandle(state, { payload }) {
      const filterData = state.data.filter((item) =>
        item.title.includes(payload)
      );
      state.push(filterData);
    },
  },
});
export const { searchHandle } = Searched.actions;
export default Searched.reducer;
