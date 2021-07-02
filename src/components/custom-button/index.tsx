import React from 'react'
import './index.scss'

const CustomButton: React.FC<any> = ({children, isGoogleSignIn , ...otherProps}) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} `} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
