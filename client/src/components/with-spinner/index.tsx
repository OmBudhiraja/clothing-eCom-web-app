import React from 'react'
import Spinner from '../spinner';

const WithSpinner = (WrappedComponent: React.FC) =>  ({isLoading , ...otherProps} : any) =>{
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedComponent {...otherProps} />
    )
}  


export default WithSpinner
