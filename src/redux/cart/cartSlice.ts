import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    hidden: boolean
}

const initialState: CartState = {
    hidden: true
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartHidden: (state) =>{
            state.hidden = !state.hidden
        }
    }
})

export const {toggleCartHidden} = CartSlice.actions

export default CartSlice.reducer