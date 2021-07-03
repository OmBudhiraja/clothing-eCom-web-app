import React from 'react'
import './index.scss'
import {SavedItem} from '../../redux/cart/cartUtils'

interface Props {
    item: SavedItem
}

const CartItem: React.FC<Props> = ({item : {name, imageUrl, price, quantity}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span> {quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
