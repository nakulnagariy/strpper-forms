import React from "react";

const RadioButtonGroup = React.forwardRef(({
                       id,
                       label,
                       opts,
                       radioName,
                       handleChange,
                       className
                     }, ref) => {

  let activeWrapperClass = className ? "input-group " + className : "input-group ";

  return (
    <div className={activeWrapperClass} ref={ref}>
      {label ? (<label>{label}</label>) : (<label className="sr-only">{label}</label>)}
      <div className="btn-group btn-group-options btn-group-options-highlight-2 m-b-1">
        {opts.map((opt, index) => (
          <label key={index} className="btn btn-group-radio"
                 htmlFor={opt.id}>
            <input type="radio" 
              id={opt.id} value={opt.val} 
              name={radioName ? radioName : "radioOptions"} 
              defaultChecked={opt.defaultChecked}
              onClick={handleChange}/>
            <span className="input-label-wrapper">{opt.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
});


export default RadioButtonGroup;


