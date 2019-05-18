import React from "react";

const RadioButtonGroup = ({
                       id,
                       label,
                       opts,
                       handleChange
                     }) => {
  let activeWrapperClass = "input-group";

  return (
    <div className={activeWrapperClass}>
      {label ? (<label>{label}</label>) : (<label className="sr-only">{label}</label>)}
      <div className="btn-group btn-group-options btn-group-options-highlight-2 m-b-1">
        {opts.map((opt, index) => (
          <label key={index} className="btn btn-group-radio"
                 htmlFor={id}>
            <input type="radio" 
              id={opt.id} value={opt.val} 
              name="radioOptions" 
              defaultChecked={opt.defaultChecked}/>
            <span className="input-label-wrapper">{opt.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};


export default RadioButtonGroup;


