import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export default UserSlice.reducer