import React, { FormEvent, ChangeEvent, useState } from 'react'
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';
import './index.scss'

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
        <div className="sign-in">
            <h2 className="title">I already have an Account!</h2>
            <span className="sub-head">Sign in with your Email & Password</span>
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
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true} >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
