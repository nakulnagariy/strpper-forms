import React from 'react'

const DateInput = ({
    id,
    label,
    placeholder,
    name,
    type,
    disabled,
    className,
    handleChange,
    maxLength,
    touched, 
    error
}) => {
    let activeWrapperClass = className ? "input-group " + className : "input-group ";
    let activeInputClass = "";
    if(touched && error) {
        activeWrapperClass = activeWrapperClass + " input-group-alert";
        activeInputClass = " input-group-alert d-inline-block";
    }

  return (
    <div className={activeWrapperClass}>
    {!label ? (null) : <label htmlFor={id} >{label}</label>}
    <input 
        type={type ? type : "text"}
        placeholder={placeholder}
        aria-label={label}
        aria-describedby={label}
        className={activeInputClass}
        disabled={disabled}
        id={id}
        name={name}
        maxLength={maxLength}
        onBlur={handleChange}/>
        {touched && error && (<small className="feedback" id={"err_" + id}>{error}</small>)}
</div>
  )
};

export default DateInput;