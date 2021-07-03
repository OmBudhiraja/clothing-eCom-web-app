import React from 'react'
import './index.scss'

const CustomButton: React.FC<any> = ({children, inverted, isGoogleSignIn , ...otherProps}) => {
    return (
        <button
         className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} `} {...otherProps}
         >
            {children}
        </button>
    )
}

export default CustomButton
