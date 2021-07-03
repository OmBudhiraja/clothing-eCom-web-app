import React from 'react'
import CollectionItem from '../collection-item/';
import './index.scss'

interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number
}

interface Props {
    title: string;
    items: Item[];
    // routeName: string
}

const CollectionPreview: React.FC<Props> = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 role="link" onClick={() => {} } className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((_ , index) => index < 4 ).map((item: Item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
