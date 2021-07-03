import React from 'react'
import CustomButton from '../custom-button'
import { useAppDispatch } from '../../redux/hook';
import { addItem } from '../../redux/cart/cartSlice';
import './index.scss' 


interface Props {
    item:{
        id: number;
        name: string;
        imageUrl: string;
        price: number
    }
}

const CollectionItem: React.FC<Props> = ({item}) => {
    const dispatch = useAppDispatch()
    const { name, imageUrl, price} = item
    const style ={
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '100% 100%',
    }

    const addCartHandler = ()=>{
        dispatch(addItem(item))
    }

    return (
        <div className="collection-item" >
            <div style={style} className="image">
                <CustomButton inverted onClick={addCartHandler}> ADD TO CART </CustomButton>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
