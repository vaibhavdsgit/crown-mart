import { useState } from "react";
import FormInput from '../form-input/FormInput';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import './signInForm.scss';

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("Incorrect password for email")
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this Email")
                    break;
                default:
                    console.log(error);
            }
            resetFormFields();
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>Already have and account?</h2>
            <span>Sign In with you Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;