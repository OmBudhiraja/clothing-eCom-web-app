import {takeLatest, put, call, all} from 'redux-saga/effects'
import { clearCart } from '../cart/cartSlice';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from './../../firebase/firebaseUtils';
import {setError, googleSignInStart, setCurrentUser, emailSignInStart, signOut, checkUserSession, signUpStart} from './userSlice'


function* getSnapFromUserAuth(user: any, extraInfo?: object){
    try{
        const userRef: {get: ()=>{}} = yield call(createUserProfileDocument,user, extraInfo)
        const snapshot : {data: ()=> {}, id: string} = yield userRef.get()
        const userObj = {id: snapshot.id, ...snapshot.data()}
        yield put(setCurrentUser(userObj))
    }catch(err){
        yield put(setError(err.message))
    }
}

export function* signInGoogle(){
    try{
        const {user}: {user: any} = yield auth.signInWithPopup(googleProvider)
        yield getSnapFromUserAuth(user)
    }catch(err){
        yield put(setError(err.message))
    }
}

export function* signInEmail({payload: {email, password}}: any){
    try{
        const {user}: {user: any} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapFromUserAuth(user)
    }catch(err){
        yield put(setError(err.message))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest( googleSignInStart().type, signInGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(emailSignInStart().type, signInEmail)
}

export function* isUserAuthenticated(){
    try{
        const userAuth: object | null = yield getCurrentUser()
        if(!userAuth) return
        yield getSnapFromUserAuth(userAuth)

    }catch(err){
        yield put(setError(err.message))
    }
}

export function* oncheckUserSession(){
    yield takeLatest(checkUserSession().type, isUserAuthenticated)
}

export function* signOutUser(){
    try{
        yield auth.signOut()
        yield put(setCurrentUser(null))
        yield put(clearCart())
    }catch(err){
        yield put(setError(err.message))
    }
}

export function* onSignOutStart(){
    yield takeLatest(signOut().type, signOutUser)
}

export function* signUpWithSignIn({payload: {email, password, displayName}}: any){
    try{
        const { user }: {user: any} = yield auth.createUserWithEmailAndPassword( email, password );
        yield getSnapFromUserAuth(user, {displayName})
    }catch(err){
        yield put(setError(err.message))
    }
}

export function* onSignUpStart(){
    yield takeLatest(signUpStart().type, signUpWithSignIn)
}

export default function* userWatcherSaga(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(oncheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}