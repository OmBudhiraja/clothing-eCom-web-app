import React from 'react'
import {SavedItem} from '../../redux/cart/cartUtils'
import { useAppDispatch } from '../../redux/hook'
import {removeItem, addItem, decreaseItemQuantity} from '../../redux/cart/cartSlice'
import styled from 'styled-components'

interface Props {
    item: SavedItem
}

const CheckoutItem: React.FC<Props> = ({item}) => {
    const {name, imageUrl, price, quantity} = item
    const dispatch = useAppDispatch()

    const IncreaseQuantityHandler = ()=>{
        dispatch(addItem(item))
    }

    const DecreaseQuantityHandler = () =>{
        if(quantity === 1){
            dispatch(removeItem(item))
        }
        dispatch(decreaseItemQuantity(item))
    }

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <Quantity>
                <div className="arrow" onClick={DecreaseQuantityHandler}>
                    &#10094;
                </div>

                <span className="value" >{quantity}</span>

                <div className="arrow" onClick={IncreaseQuantityHandler}>
                    &#10095;
                </div>
            </Quantity>
            <TextContainer>{price}</TextContainer>
            <RemoveBtn onClick={()=> dispatch(removeItem(item))}>
                &#10005;
            </RemoveBtn>
        </CheckoutItemContainer>
    )
}


const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
  
    img {
    width: 100%;
    height: 100%;
    }
`

const RemoveBtn = styled.div`
    padding-left: 12px;
    cursor: pointer;
`

const TextContainer = styled.span`
    width: 23%
`

const Quantity = styled(TextContainer)`
    display: flex;
    .arrow{
    cursor: pointer;
    }
    .value{
    margin: 0 10px;
    }
`


export default CheckoutItem
