import React from 'react'
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
// import {useAppSelector} from '../../redux/hook'
// import {Redirect} from 'react-router'
import styled from 'styled-components'

const SignInAndSignUpPage: React.FC = () => {
    // const {currentUser} = useAppSelector(state => state.user)
    // // console.log(currentUser)
    // if(currentUser){
    //     return <Redirect to="/" />
    // }
    return (
        <SignInAndSignUpPageContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpPageContainer>
    )
}


const SignInAndSignUpPageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 50px auto;
`

export default SignInAndSignUpPage
