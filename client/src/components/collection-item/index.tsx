import React from 'react'
import CustomButton from '../custom-button'
import { useAppDispatch } from '../../redux/hook';
import { addItem } from '../../redux/cart/cartSlice';
import styled from 'styled-components'

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

    const addCartHandler = ()=>{
        dispatch(addItem(item))
    }

    return (
        <CollectionItemContainer >
            <ImageContainer imageUrl={imageUrl} className="image">
                <CustomButton inverted onClick={addCartHandler}> ADD TO CART </CustomButton>
            </ImageContainer>
            <CollectionFooter>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </CollectionFooter>
        </CollectionItemContainer>
    )
}

const CollectionItemContainer = styled.div`
    width: 21vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    margin-bottom: 30px;
    color: rgb(94, 85, 85);
    &:hover{
      .image{
            opacity: 0.8;
            button{
                opacity: 0.9;
                display: block;
            }
        }
    }
    @media screen and (max-width: 800px){
        width: 45vw;
        &:hover{
            .image{
                    opacity: unset;
                    button{
                        opacity: unset;
                }
        }
    }
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-position: center;
    margin-bottom: 5px;
    display: flex;
    align-items:flex-end;
    justify-content: center;
    padding-bottom: 25px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: ${ (props: {imageUrl: string} ) => `url(${props.imageUrl})`};
    button{
    opacity: 0.7;
    display: none;
    }
    @media screen and (max-width: 800px){
        button{
            display: block;
        }
    }
`

const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
    width: 90%;
    margin-bottom: 15px;
    }

    .price {
    width: 10%;
    }
    @media screen and (max-width: 800px){
        font-size: 16px;
        .name{
            width: 86%;
        }
        .price{
            width: 14%;
        }
    }
`

export default CollectionItem
