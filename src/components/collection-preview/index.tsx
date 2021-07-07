import React from 'react'
import CollectionItem from '../collection-item/';
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

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
    const history = useHistory()
    const path = history.location.pathname
    return (
        <CollectionPreviewContainer>
            <HeaderContainer>
                <h1 className="title">{title.toUpperCase()}</h1>
                <Link className="link" to={`${path}/${routeName}`}>See More</Link>
            </HeaderContainer>
            <Preview>
                {items.filter((_ , index) => index < 4 ).map((item: Item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </Preview>
        </CollectionPreviewContainer>
    )
}


const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

const HeaderContainer = styled.div`
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    .title {
    font-size: 28px;
    }
    .link{
    color: rgb(86, 86, 197);
    cursor: pointer;
    }
`


const Preview = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default CollectionPreview
