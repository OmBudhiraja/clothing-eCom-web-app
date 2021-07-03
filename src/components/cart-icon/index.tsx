import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg'
import { useAppDispatch } from '../../redux/hook';
import {toggleCartHidden} from '../../redux/cart/cartSlice'
import './index.scss'

const CartIcon: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon
