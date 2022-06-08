
import SignUp from "../../components/sign-up/sign-up";
import SignInForm from "../../components/sign-in/sign-in";

import './sign-in.scss';

const SignIn = () => {

    return(
        <div className="sign-in-box">
            <SignInForm/>
            <SignUp/>
            
        </div>
    )
}
export default SignIn;