// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import fieldReducer from './fieldSlice';
import bookingReducer from './bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fields: fieldReducer,
    bookings: bookingReducer,
  },
});
