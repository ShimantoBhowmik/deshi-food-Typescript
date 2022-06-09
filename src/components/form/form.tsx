import { InputHTMLAttributes, FC } from 'react';

import './form.scss';

type FormInputProps = { label: string} & InputHTMLAttributes<HTMLInputElement>;

const Form: FC<FormInputProps> = ({label, ...Props}) => {
    return(
        <div className = "group">
        <input className="form-input" {...Props}/>
        { label && (
        <label className = {`${Boolean(Props.value && typeof Props.value ==='string' && Props.value.length) ? 'shrink': ''} form-input-label`}>{label}</label>
        )}
        
        </div>
    )
}

export default Form;