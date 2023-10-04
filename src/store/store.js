import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./userSlice"
import { authSlice } from "./authSlice"
import { createWrapper } from "next-redux-wrapper"

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true
  })

export const wrapper = createWrapper(makeStore)
