import React from 'react'
import styled, {css} from 'styled-components'

const CustomButton: React.FC<any> = ({children, ...props}) => {
    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    )
}

const invertedBtnStyles = css`
    background-color: white;
    color: black;
    &:hover{
    background-color: black;
    color: white;
    border: none;
    }
`

const gooleSignInBtnStyled = css`
    background-color: #4285f4;
    &:hover{
    background-color: #357ae8;
    color: white;
    border: none;
    }
`

const getBtnStyles = (props: any) =>{
    if(props.inverted) return invertedBtnStyles
    return props.isGoogleSignIn ? gooleSignInBtnStyled : ''
}


const ButtonStyled = styled.button`
    min-width: 130px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    border: 1px solid black;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    ${getBtnStyles}
`

export default CustomButton
