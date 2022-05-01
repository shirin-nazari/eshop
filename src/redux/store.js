import { configureStore } from '@reduxjs/toolkit';
import dataRducer from './data/dataSlice';
export const store = configureStore({
  reducer: {
    data: dataRducer,
  },
});
