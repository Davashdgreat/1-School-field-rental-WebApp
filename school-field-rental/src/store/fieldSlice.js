import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fields: [], // Array of fields
  isLoading: false, // Loading state to fetch field data
  error: null, // store errors
};

const fieldSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    fetchFieldsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchFieldsSuccess: (state, action) => {
      state.fields = action.payload;
      state.isLoading = false;
    },
    fetchFieldsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addField: (state, action) => {
      state.fields.push(action.payload);
    },
    removeField: (state, action) => {
      state.fields = state.fields.filter((field) => field.id !== action.payload);
    },
  },
});

export const {
  fetchFieldsStart,
  fetchFieldsSuccess,
  fetchFieldsFailure,
  addField,
  removeField,
} = fieldSlice.actions;

export default fieldSlice.reducer;