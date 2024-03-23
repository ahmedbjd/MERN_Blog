import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/UserSlice.jsx';

export default configureStore({
  reducer: {
    user: userReducer
  },
})