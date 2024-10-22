// src/features/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [], // Array of booking objects
  isLoading: false, // Loading state for fetching bookings
  error: null, // To store any booking errors
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    fetchBookingsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchBookingsSuccess: (state, action) => {
      state.bookings = action.payload;
      state.isLoading = false;
    },
    fetchBookingsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
    },
  },
});

export const {
  fetchBookingsStart,
  fetchBookingsSuccess,
  fetchBookingsFailure,
  addBooking,
  removeBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;