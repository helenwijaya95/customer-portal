import { createSlice } from "@reduxjs/toolkit";
// Initial state
const initialState = {
  authState: {},
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  }
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState

export default authSlice.reducer;