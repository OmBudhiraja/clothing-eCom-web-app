import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {addItemToCart, removeItemFromCart, Item, SavedItem, decreaseQuantityFromCart} from './cartUtils'
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
        },
        removeItem: (state, action: PayloadAction<SavedItem>) =>{
            state.cartItems = removeItemFromCart(state.cartItems, action.payload)
        },
        decreaseItemQuantity: (state, action: PayloadAction<SavedItem>)=>{
            state.cartItems = decreaseQuantityFromCart(state.cartItems, action.payload)
        },
        clearCart: (state)=>{ },
        onClearCart: (state)=>{
            state.cartItems = []
        }
    }
})

export const {toggleCartHidden, addItem, removeItem, decreaseItemQuantity, clearCart, onClearCart} = CartSlice.actions

export const selectCartItems = createSelector(
    [(state: RootState)=> state.cart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
)

export const selectCartHidden = createSelector(
    [(state: RootState)=> state.cart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
)

export default CartSlice.reducer