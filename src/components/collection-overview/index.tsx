import React from 'react'
import { selectCollectionsForPreview } from '../../redux/shop/shopSlice';
import { useAppSelector } from '../../redux/hook';
import CollectionPreview from '../../components/collection-preview/index';
import styled from 'styled-components'

const CollectionOverview: React.FC = () => {
    const collections = useAppSelector(state => selectCollectionsForPreview(state))
    return (
        <CollectionOverviewContainer>
            {collections.map((collection: any) =>
                <CollectionPreview
                key={collection.id}
                title={collection.title}
                items={collection.items}
                routeName={collection.routeName}
                />
            )}
        </CollectionOverviewContainer>
    )
}

const CollectionOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default CollectionOverview
