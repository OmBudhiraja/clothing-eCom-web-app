import {call , takeLatest, put, all} from 'redux-saga/effects'
import { clearCart, onClearCart } from './cartSlice'

export function* clearCartHandler(){
    yield put(onClearCart())
}

export function* clearCartWatcher(){
    yield takeLatest(clearCart().type, clearCartHandler)
}

export default function* cartWatcherSaga(){
    yield all([
        call(clearCartWatcher)
    ])
}