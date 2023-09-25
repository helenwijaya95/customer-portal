import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state) => {
      state.user = state;
    },
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer