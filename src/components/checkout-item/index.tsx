import React from 'react'
import {SavedItem} from '../../redux/cart/cartUtils'
import { useAppDispatch } from '../../redux/hook'
import {removeItem, addItem, decreaseItemQuantity} from '../../redux/cart/cartSlice'
import './index.scss'

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
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={DecreaseQuantityHandler}>
                    &#10094;
                </div>

                <span className="value" >{quantity}</span>

                <div className="arrow" onClick={IncreaseQuantityHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=> dispatch(removeItem(item))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
