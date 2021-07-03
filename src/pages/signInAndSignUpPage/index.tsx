import React from 'react'
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import {useAppSelector} from '../../redux/hook'
import {Redirect} from 'react-router'
import './index.scss'

const SignInAndSignUpPage: React.FC = () => {
    const {currentUser} = useAppSelector(state => state.user)
    // console.log(currentUser)
    if(currentUser){
        return <Redirect to="/" />
    }
    return (
        <div className="sign-in-up-page">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage
