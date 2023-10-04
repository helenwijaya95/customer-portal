import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  userState: [],
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserState(state, action) {
      state.userState = action.payload;
    },
  }
});

export const { setUserState } = userSlice.actions;

export const selectUserState = (state) => state.user.userState

export default userSlice.reducer;