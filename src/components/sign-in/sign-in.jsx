import { useState} from "react";

import { signInWithGooglePopup, signInUserEmailPassword } from "../../utils/firebase/firebase";

import Form  from "../form/form";

import Button from "../button/button";

import './sign-in.scss';

const defaultFields = {
        email:'',
        password:'',
    }

const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;

    const resetForm = () =>{
        setFormFields(defaultFields);
    }
    const signInGoogle = async () =>{
        await signInWithGooglePopup();
        
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        

        try{
            const {user} = await signInUserEmailPassword(email,password);
            resetForm();
        }catch(err){
            if(err.code ==="auth/wrong-password"){
                alert('The email and password combination do not match')
            } else if( err.code ==="auth/user-not-found"){
                alert('No account exists with this email')
            }else{
                console.log(err);
            }
        }

    }


    const eventChange = (event) =>{
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
                    <Button type="button" buttonType ='google' onClick={signInGoogle}>Google sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;