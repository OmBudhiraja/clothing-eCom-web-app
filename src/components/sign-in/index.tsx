import React, { FormEvent, ChangeEvent, useState } from 'react'
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';
import styled from 'styled-components'

const SignIn: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const clearInputs = ()=>{
        setFormData({
            email: '',
            password: ''
        })
    }

    const handleChange  = (e: ChangeEvent<HTMLInputElement>)=>{
        const {value, name} = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e : FormEvent)=>{
        e.preventDefault()
        try{
            await auth.signInWithEmailAndPassword(formData.email, formData.password)
            clearInputs()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <SignInContainer>
            <h2 style={{margin: "15px 0"}}>I already have an Account!</h2>
            <SubHead>Sign in with your Email & Password</SubHead>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Email"
                type="email" 
                name="email"
                value={formData.email}
                required 
                handleChange={handleChange} 
                />
                
                <FormInput
                label="Password"
                type="password" 
                name="password"
                value={formData.password}
                required 
                onChange={handleChange} 
                />
                <BtnContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true} >Sign In With Google</CustomButton>
                </BtnContainer>
            </form>
        </SignInContainer>
    )
}


const SignInContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
`

const SubHead = styled.span`
    color: gray;
    font-weight: 300;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    button:first-child{
        margin-right: 10px;
    }
`

export default SignIn
