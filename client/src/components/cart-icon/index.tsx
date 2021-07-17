import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import {toggleCartHidden} from '../../redux/cart/cartSlice'
import {selectCartItemsCount} from '../../redux/cart/cartSlice'
import styled from 'styled-components'

const CartIcon: React.FC = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector(state => selectCartItemsCount(state))
    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>
                {count ? count : '-'}
            </ItemCount>
        </CartIconContainer>
    )
}


const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    cursor: pointer;
    .shopping-icon {
      width: 24px;
      height: 24px;
    };
    @media screen and (max-width: 800px){
        margin-left: 0px;
    }
  
`
const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    pointer-events: none;
    user-select: none; 
`

export default CartIcon
