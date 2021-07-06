import React from 'react'
import { selectCollectionsForPreview } from '../../redux/shop/shopSlice';
import { useAppSelector } from '../../redux/hook';
import CollectionPreview from '../../components/collection-preview/index';
import './index.scss'

const CollectionOverview: React.FC = () => {
    const collections = useAppSelector(state => selectCollectionsForPreview(state))
    return (
        <div className="collection-overview">
            {collections.map((collection: any) =>
                <CollectionPreview
                key={collection.id}
                title={collection.title}
                items={collection.items}
                routeName={collection.routeName}
                />
            )}
        </div>
    )
}

export default CollectionOverview
