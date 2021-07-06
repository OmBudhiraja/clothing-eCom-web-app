import React from 'react'
import {useAppSelector} from '../../redux/hook'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSlice'
import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button'
import './index.scss'

const CheckoutPage: React.FC = () => {

    const cartItems = useAppSelector(state => selectCartItems(state))
    const cartTotal = useAppSelector(state => selectCartTotal(state))
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((item) =>
                <CheckoutItem key={item.id} item={item} />
            )}

            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments
                <br />
                4242 4242 4242 4242 - Exp: 1/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotal} />
        </div>
    )
}

export default CheckoutPage