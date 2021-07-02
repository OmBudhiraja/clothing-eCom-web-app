import React from 'react'
import './index.scss'

interface Props {
    name: string;
    imageUrl: string;
    price: number
}

const CollectionItem: React.FC<Props> = ({ name, imageUrl, price}) => {
    const style ={
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '100% 100%'
    }
    return (
        <div className="collection-item">
            <div style={style} className="image">
                
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
