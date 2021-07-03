import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import CartItem from '../cart-item';
import CustomButton from '../custom-button';
import {selectCartItems, toggleCartHidden} from '../../redux/cart/cartSlice'
import { useHistory } from 'react-router-dom';
import './index.scss'

const CartDropdown: React.FC = () => {
    const cartItems = useAppSelector(state => selectCartItems(state))
    const isCartEmpty = !cartItems.length
    console.log(isCartEmpty)
    const history = useHistory()
    const dispatch = useAppDispatch()

    const onclickHandler = ()=>{
        if(isCartEmpty){
            history.push('/shop')
        }else{
            history.push('/checkout')
        }
        dispatch(toggleCartHidden())
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { !isCartEmpty ? (
                    cartItems.map((item)=>
                        <CartItem key={item.id} item={item} />
                    )
                ): (
                    <span className="empty-msg">Your Cart is empty. </span>
                )}
            </div>
            <CustomButton onClick={onclickHandler}>
                {isCartEmpty ? "SHOP PRODUCTS" :  "GO TO CHECKOUT"  }
            </CustomButton>
        </div>
    )
}

export default CartDropdown
