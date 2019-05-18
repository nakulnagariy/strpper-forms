import React from 'react'

const SelectInput = ({
    id,
    label,
    opts,
    disabled,
    className,
    handleChange,
    touched, 
    error
}) => {
    let activeWrapperClass = "input-group select";
    let activeInputClass = "";
    if(touched && error) {
        activeWrapperClass = activeWrapperClass + " input-group-alert";
        activeInputClass = " input-group-alert d-inline-block";
    }

  return (
    <React.Fragment>
        <div className={activeWrapperClass}>
            <label htmlFor={id}>{label}</label>
            <select id={id} className={activeInputClass} onChange={handleChange}>
            {
                opts.map((opt, index) => (
                <option key={index} value={opt.val}>{opt.name}</option>
                ))
            }
            </select>
            <span className="select-chevron"></span>
            {touched && error && (<small className="feedback" id={"err_" + id}>{error}</small>)}
        </div>
    </React.Fragment>
  )
};

export default SelectInput;