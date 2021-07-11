import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import {RootState} from '../store'

type UserState = {
    currentUser: null | {};
    fetchingUser: boolean,
    error: undefined | string
}

const initialState: UserState = {
    currentUser: null,
    fetchingUser: false,
    error: undefined
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        googleSignInStart: () =>{},
        emailSignInStart: (state, action: PayloadAction<{email: string, password: string} | undefined>) =>{},
        setCurrentUser: (state, action: PayloadAction<object | null>) =>{
            state.currentUser = action.payload
            state.error = undefined
        },
        setError: (state, action: PayloadAction<string>) =>{
            state.error = action.payload
        },
        checkUserSession: ()=>{},
        signOut: ()=>{},
        signUpStart: (_, action: PayloadAction<{email: string, password: string, displayName: string} | undefined>) => {},
        onSignUp: () =>{},

    }
})

export const { setCurrentUser,googleSignInStart, emailSignInStart, setError, checkUserSession, signOut,signUpStart, onSignUp } = UserSlice.actions

export const selectUser = createSelector(
    [(state: RootState) => state.user],
    (user) => user.currentUser
)

export default UserSlice.reducer