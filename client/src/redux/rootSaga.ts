import {all , call} from 'redux-saga/effects'
import collectionWatcherSaga from './shop/saga'
import userWatcherSaga from './user/saga'
import cartWatcherSaga from './cart/saga'

export default function* rootSaga(){
    yield all([
      call(collectionWatcherSaga),
      call(userWatcherSaga),
      call(cartWatcherSaga)
    ])
}