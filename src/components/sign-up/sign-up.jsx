import { useState } from "react";
import { createUserEmailPassword,createUserDoc } from "../../utils/firebase/firebase";
import Form  from "../form/form";
import Button from "../button/button";
import './sign-up.scss';

const defaultFields = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

const SignUp = () =>{

    const [formFields, setFormFields] = useState(defaultFields);
    const {displayName, email, password, confirmPassword} = formFields;


    const resetForm = () =>{
        setFormFields(defaultFields);
    }
    const submitHandler = async (event) =>{
        event.preventDefault();
        if( password !== confirmPassword){
            alert("passwords do not match each other!");
            return;
        }

        try{
            const {user} = await createUserEmailPassword(email, password);
            await createUserDoc(user, { displayName });
            resetForm();
            
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Email already in use');
            }else{
                console.log( "Error creating user account", console.log(err));
            }
            
        }

    }


    const eventChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });
    };

    return(
        <div className="sign-up">
            <h2>Create an account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={submitHandler}>
                
                <Form label="Display Name" type = 'text' required onChange={eventChange} name='displayName' value={displayName}/>
                
                
                <Form label="Email" type = 'email' required onChange={eventChange} name='email' value={email}/>
                
            
                <Form label="Password" type = 'password' required onChange={eventChange} name='password' value={password}/>
                
                <Form label="Confirm Password" type = 'password' required onChange={eventChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUp;