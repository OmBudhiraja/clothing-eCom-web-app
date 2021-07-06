import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

interface Props {
    price: number
}

const StripeCheckoutButton: React.FC<Props> = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx'

    const onToken = (token: any)=>{
        console.log(token)
        alert('Payment Successful')
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
