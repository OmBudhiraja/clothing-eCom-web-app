import React from 'react'
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item';
// import CollectionItem from '../../components/collection-item';
import { useAppSelector } from '../../redux/hook';
import {selectCollection} from '../../redux/shop/shopSlice'
import styled from 'styled-components'

const CollectionPage: React.FC = () => {
    const {collectionId} = useParams<{collectionId: string}>()
    const collection = useAppSelector(state => selectCollection(collectionId)(state))!
    const {title, items} = collection
    return (
        <CollectionPageContainer>
            <Title>{title}</Title>
            <ItemsContainer>
                {items.map((item: any) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
    )
} 

const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
`

const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    @media screen and (max-width: 800px){
        grid-template-columns: 1fr 1fr;
    }
`

export default CollectionPage
