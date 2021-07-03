import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {addItemToCart, Item, SavedItem} from './cartUtils'
import {RootState} from '../store'

type CartState = {
    hidden: boolean,
    cartItems: SavedItem[]
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
        addItem: (state, action: PayloadAction<Item>)=>{
            state.cartItems = addItemToCart(state.cartItems, action.payload)
        }
    }
})

export const {toggleCartHidden, addItem} = CartSlice.actions

export const selectCartItems = createSelector(
    [(state: RootState)=> state.cart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
)


export default CartSlice.reducer