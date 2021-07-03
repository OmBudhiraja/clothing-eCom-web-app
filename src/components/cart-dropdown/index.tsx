import React from 'react'
import CustomButton from '../custom-button';
import './index.scss'

const CartDropdown: React.FC = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                
            </div>
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default CartDropdown
