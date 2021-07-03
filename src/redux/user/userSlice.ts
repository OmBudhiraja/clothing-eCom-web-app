import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import {RootState} from '../store'

type UserState = {
    currentUser: null | {}
}

const initialState: UserState = {
    currentUser: null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<object | null>) =>{
            state.currentUser = action.payload
        }
    }
})

export const { setCurrentUser } = UserSlice.actions

export const selectUser = createSelector(
    [(state: RootState) => state.user],
    (user) => user.currentUser
)

export default UserSlice.reducer