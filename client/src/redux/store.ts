import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserReducer from './user/userSlice'
import CartReducer from './cart/cartSlice'
import DirectoryReducer from './directory/directorySlice'
import ShopReducer from './shop/shopSlice'
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  thunk: false
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: {
//       user: UserReducer,
//       cart: CartReducer
//   },
//   middleware: customizedMiddleware
// })

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...customizedMiddleware, sagaMiddleware]
  })



sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store