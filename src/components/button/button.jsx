import './button.scss';
import { ButtonSpinner } from './button-styles';

const BUTTON_TYPES = {
    google: 'google-sign',
    inverted: 'inverted',

}


const Button = ({children, buttonType, isLoading, ...Props}) =>{
    return(
        <button disabled = {isLoading} className={`button ${BUTTON_TYPES[buttonType]}`} {...Props}>
            {isLoading ? <ButtonSpinner /> : children}
        </button>
    )
}

export default Button;