import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {addItemToCart} from './cartUtils'

type CartState = {
    hidden: boolean,
    cartItems: {}[]
}

const initialState: CartState = {
    hidden: true,
    cartItems: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartHidden: (state) =>{
            state.hidden = !state.hidden
        },
        addItem: (state, action: PayloadAction<object>)=>{
            state.cartItems = addItemToCart(state.cartItems,action.payload)
        }
    }
})

export const {toggleCartHidden, addItem} = CartSlice.actions

export default CartSlice.reducer