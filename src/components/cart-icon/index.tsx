import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import {toggleCartHidden} from '../../redux/cart/cartSlice'
import './index.scss'

const CartIcon: React.FC = () => {
    const dispatch = useAppDispatch()
    const {cartItems} = useAppSelector(state => state.cart)
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">
                {cartItems.length && `${cartItems.length}`}
            </span>
        </div>
    )
}

export default CartIcon
