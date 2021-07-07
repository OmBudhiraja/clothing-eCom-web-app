import React, { FormEvent, ChangeEvent, useState } from 'react'
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';
import styled from 'styled-components'

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const clearInputs = ()=>{
        setFormData({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword( formData.email, formData.password );
            await createUserProfileDocument(user, { displayName: formData.displayName });
            clearInputs()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <SignUpContainer>
            <Title>I don't have an Account!</Title>
            <SubHead>Sign up with your Email & Password</SubHead>
            <form onSubmit={handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={formData.displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    margin: 15px 0;
`

const SubHead = styled.span`
    color: gray;
    font-weight: 300;
`

export default SignUp
