import { configureStore } from '@reduxjs/toolkit'
import userReducer from './store/userSlice'
import formReducer from './store/formSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    form: formReducer
  },
})