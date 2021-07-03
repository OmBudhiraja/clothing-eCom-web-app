import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import UserReducer from './user/userSlice'
import CartReducer from './cart/cartSlice'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer: {
      user: UserReducer,
      cart: CartReducer
  },
  middleware: customizedMiddleware
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store