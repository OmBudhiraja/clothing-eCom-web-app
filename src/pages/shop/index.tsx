import React, { useState } from 'react'
import CollectionPreview from '../../components/collection-preview/index';
import shopData from './data'

const ShopPage: React.FC = () => {
    const [collections] = useState(shopData)
    return (
        <div className='shop-page'>
            {collections.map(collection =>
                <CollectionPreview
                key={collection.id}
                title={collection.title}
                items={collection.items}
                // routeName={collection.routeName}
                />
            )}
        </div>
    )
}

export default ShopPage
 