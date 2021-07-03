import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import {toggleCartHidden} from '../../redux/cart/cartSlice'
import {selectCartItemsCount} from '../../redux/cart/cartSlice'
import './index.scss'

const CartIcon: React.FC = () => {
    const dispatch = useAppDispatch()
    // const {cartItems} = useAppSelector(state => state.cart)
    const count = useAppSelector(state => selectCartItemsCount(state))
    // const itemCount: number = cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
    console.log('cart-icon here')
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">
                {/* {cartItems.length ? itemCount : '-'} */}
                {count}
            </span>
        </div>
    )
}

export default CartIcon
