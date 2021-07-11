import {call, put, takeLatest} from 'redux-saga/effects'
import { fetchCollections, setCollection, setError } from './shopSlice'
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebaseUtils'

export function* getCollections(){
    try{
        const collectionRef = firestore.collection('collection')
        const snapshot: object = yield collectionRef.get()
        // const data = convertCollectionsSnapshotToMap(snapshot)
        const data: object = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(setCollection(data))
    }catch(err){
        yield put(setError(err.message))
    }
}

export default function* collectionWatcherSaga(){
    yield takeLatest(fetchCollections().type, getCollections)
}