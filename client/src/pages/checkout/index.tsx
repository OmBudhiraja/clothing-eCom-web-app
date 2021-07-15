import React from 'react'
import {useAppSelector} from '../../redux/hook'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSlice'
import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button'
import styled from 'styled-components'

const CheckoutPage: React.FC = () => {

    const cartItems = useAppSelector(state => selectCartItems(state))
    const cartTotal = useAppSelector(state => selectCartTotal(state))
    
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block price">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </CheckoutHeader>

            {cartItems.map((item) =>
                <CheckoutItem key={item.id} item={item} />
            )}

            <Total>
                <span>TOTAL: ${cartTotal}</span>
            </Total>
            <TestWarning>
                *Please use the following test credit card for payments
                <br />
                4242 4242 4242 4242 - Exp: 1/22 - CVV: 123
            </TestWarning>
            <StripeCheckoutButton price={cartTotal} />
        </CheckoutPageContainer>
    )
}


const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    button{
      margin-left: auto;
    }
    @media screen and (max-width: 800px){
        width: 90%;
    }
`

const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
        text-transform: capitalize;
        width: 23%;
        &:last-child {
            width: 8%;
        }
    }
    .price{
        width: 15%;
    }    

`

const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`

const TestWarning = styled.div`
    color: red;
    text-align: center;
    font-size: 20px;
    margin: 40px 0 30px;
`

export default CheckoutPage
