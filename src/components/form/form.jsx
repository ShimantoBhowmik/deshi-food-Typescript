import './form.scss';

const Form = ({label, ...Props}) => {
    return(
        <div className = "group">
        <input className="form-input" {...Props}/>
        { label && (
        <label className = {`${Props.value.length ? 'shrink': ''} form-input-label`}>{label}</label>
        )}
        
        </div>
    )
}

export default Form;