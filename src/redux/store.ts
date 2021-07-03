import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './user/userSlice'
import CartReducer from './cart/cartSlice'

const store = configureStore({
  reducer: {
      user: UserReducer,
      cart: CartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store