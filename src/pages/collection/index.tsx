import React from 'react'
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item';
// import CollectionItem from '../../components/collection-item';
import { useAppSelector } from '../../redux/hook';
import {selectCollection} from '../../redux/shop/shopSlice'
import './index.scss'


const CollectionPage: React.FC = () => {
    const {collectionId} = useParams<{collectionId: string}>()
    const collection = useAppSelector(state => selectCollection(collectionId)(state))!
    
    const {title, items} = collection
    console.log(collection)
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item: any) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
    } 


export default CollectionPage
