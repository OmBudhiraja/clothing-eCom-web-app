import React from 'react'
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import './index.scss'

const SignInAndSignUpPage: React.FC = () => {
    return (
        <div className="sign-in-up-page">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage
