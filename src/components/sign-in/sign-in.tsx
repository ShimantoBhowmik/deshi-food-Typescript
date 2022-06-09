import { useState, FormEvent, ChangeEvent} from "react";

import { signInWithGooglePopup, signInUserEmailPassword } from "../../utils/firebase/firebase";

import Form  from "../form/form";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import './sign-in.scss';
import { useDispatch } from "react-redux";

import { emailSignInStart, googleSignInStart } from "../../store/user/user-action";

const defaultFields = {
        email:'',
        password:'',
    }

const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const resetForm = () =>{
        setFormFields(defaultFields);
    }
    const signInGoogle = async () =>{
        dispatch(googleSignInStart());
        
    }

    const submitHandler = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        

        try{
            dispatch(emailSignInStart(email, password));
            resetForm();
        }catch(err){
            console.log('user sign in failed', err );
        }

    }


    const eventChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return(
        <div className="sign-in">
            <h2>Already have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={submitHandler}>
                
                <Form label="Email" type = 'email' required onChange={eventChange} name='email' value={email}/>
            
                <Form label="Password" type = 'password' required onChange={eventChange} name='password' value={password}/>
                <div className="buttons">
                    <Button type='submit'>Sign In</Button>
                    <Button type="button" buttonType ={BUTTON_TYPE_CLASSES.google} onClick={signInGoogle}>Google sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;