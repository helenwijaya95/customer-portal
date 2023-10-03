import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./authSlice"
import { dependantSlice } from "./dependantSlice"
import { createWrapper } from "next-redux-wrapper"

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [dependantSlice.name]: dependantSlice.reducer
    },
    devTools: true
  })

export const wrapper = createWrapper(makeStore)
