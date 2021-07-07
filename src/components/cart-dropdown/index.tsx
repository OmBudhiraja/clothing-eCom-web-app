import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import CartItem from '../cart-item';
import CustomButton from '../custom-button';
import {selectCartItems, toggleCartHidden} from '../../redux/cart/cartSlice'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const CartDropdown: React.FC = () => {
    const cartItems = useAppSelector(state => selectCartItems(state))
    const isCartEmpty = !cartItems.length
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
        <CartDropdownContainer>
            <CartItemsContainer>
                { !isCartEmpty ? (
                    cartItems.map((item)=>
                        <CartItem key={item.id} item={item} />
                    )
                ): (
                    <EmptyMsg>Your Cart is empty. </EmptyMsg>
                )}
            </CartItemsContainer>
            <CustomButton onClick={onclickHandler}>
                {isCartEmpty ? "SHOP PRODUCTS" :  "GO TO CHECKOUT"  }
            </CustomButton>
        </CartDropdownContainer>
    )
}

const CartDropdownContainer = styled.div`
    position: absolute;
    width: 265px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 15;
    button {
      margin-top: auto;
    }
`

const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar{
    width: 8px;
    background: white;
    border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb{
    background: rgb(78, 71, 71);
    border-radius: 15px;
    }
`
const EmptyMsg = styled.span`
    font-size: 20px;
    margin: 70px auto;
    color: rgb(82, 62, 62);
    text-align: center;
`

export default CartDropdown
