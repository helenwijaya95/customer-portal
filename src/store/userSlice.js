import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer