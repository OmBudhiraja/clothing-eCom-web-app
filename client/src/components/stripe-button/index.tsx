import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

interface Props {
    price: number
}

const StripeCheckoutButton: React.FC<Props> = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx'

    const onToken = (token: any)=>{
        axios({
            url: '/payment',
            method: 'POST',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(() =>{
            alert('Payment Successful with backend')
        }).catch(err =>{
            console.log('payment error', err)
            alert('There was an issue with your payment. Please make sure that you use the given credit card.')
        })
        
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="eCommerce Ltd"
        shippingAddress
        billingAddress
        image="https://sendeyo.com/en/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
