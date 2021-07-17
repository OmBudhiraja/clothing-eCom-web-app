import React, {memo} from 'react'
import {SavedItem} from '../../redux/cart/cartUtils'
import styled from 'styled-components'

interface Props {
    item: SavedItem
}

const CartItem: React.FC<Props> = ({item : {name, imageUrl, price, quantity}}) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <span> {quantity} X ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}


const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 14px;
    color: rgb(80, 76, 76);
  
    img {
      width: 30%;
    }
`

const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

const Name = styled.span`
    font-size: 16px;
    margin-bottom: 6px;
    color: black;
`

export default memo(CartItem)
