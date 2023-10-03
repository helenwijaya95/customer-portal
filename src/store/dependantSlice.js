import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  dependants: []
};

// Actual Slice
export const dependantSlice = createSlice({
  name: "dependant",
  initialState,
  reducers: {
    // Action to set the authentication status
    setDependants(state, action) {
      state.dependants = action.payload;
    },
  },
});

export const { setDependants } = dependantSlice.actions;

export const selectDependantState = (state) => state.dependant.dependants;

export default dependantSlice.reducer;