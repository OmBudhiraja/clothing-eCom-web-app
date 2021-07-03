import React from 'react'
import { useAppSelector } from '../../redux/hook';
import CartItem from '../cart-item';
import CustomButton from '../custom-button';
import './index.scss'

const CartDropdown: React.FC = () => {
    const {cartItems} = useAppSelector(state => state.cart)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item)=>
                        <CartItem key={item.id} item={item} />
                    )
                ): (
                    <p>no items in the cart</p>
                )}
                {
                     cartItems.map((item)=>{
                        <CartItem key={item.id} item={item} />
                    })
                }
            </div>
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default CartDropdown
