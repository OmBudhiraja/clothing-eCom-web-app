import React from 'react'
import CollectionItem from '../collection-item/';
import {Link} from 'react-router-dom'
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
    routeName: string
}

const CollectionPreview: React.FC<Props> = ({title, items, routeName}) => {
    return (
        <div className="collection-preview">
            <div className="head">
            <h1 className="title">{title.toUpperCase()}</h1>
            <Link className="link" to={routeName}>See More</Link>
            </div>
            <div className="preview">
                {items.filter((_ , index) => index < 4 ).map((item: Item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
