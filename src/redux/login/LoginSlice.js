import { createSlice } from '@reduxjs/toolkit';

const LoginUser = createSlice({
  name: 'login',
  initialState: [],
  reducers: {
    registerStore(state, { payload: email, payload: password }) {
      state.push(email, password);
    },
    loginStore(state, { payload }) {
      state.find((item) => item === payload);
    },
  },
});

export const { registerStore, loginStore } = LoginUser.actions;
export default LoginUser.reducer;
