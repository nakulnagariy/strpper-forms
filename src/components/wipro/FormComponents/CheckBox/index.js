import React from "react";

const CheckBox = ({
    id,
    label,
    value,
    children,
    touched, 
    error
  }) => {
    let activeWrapperClass = "input-group";
    let activeInputClass = "";
    if (touched && error) {
    activeWrapperClass = activeWrapperClass + " input-group-alert";
    activeInputClass = " input-group-alert d-inline-block";
}

return (
    <div className={activeWrapperClass}>
        <label className="input-checkbox" htmlFor={id}>
            <span>{label}</span>
            {children}
            <input id={id} type="checkbox" defaultChecked={value ? true : null}/>
            <div className="input-indicator needsclick"></div>
        </label>
        {touched && error && (<small className="feedback" id={"err_" + id}>{error}</small>)}
    </div>
);
};

export default CheckBox;