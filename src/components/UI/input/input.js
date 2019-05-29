import React from 'react';
import './input.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = ['input-group'];
    let showErrorMessgae = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('input-group-alert');
        showErrorMessgae = <small className="feedback">Please enter a valid {props.validType}.</small>;
    }
    switch (props.elementType) {
        case ('text'):
            inputElement =
                <input
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change} />;
            break;
        case ('textarea'):
            inputElement =
                <textarea
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change} />
            break;
        case ('select'):
            inputElement =
                <div className="input-group select">
                    <select className="" onChange={props.change}>
                        {props.elementConfig.options.map((opt) =>
                            <option key={opt.value} value={opt.value}>
                                {opt.displayValue}
                            </option>
                        )}
                    </select>
                    <span className="select-chevron"></span>
                </div>
            break;
        case ('checkboxBtnGrp'):
            inputElement =
                <div className="input-group">
                    <div className="btn-group btn-group-options btn-group-options-highlight-1 m-b-1">
                        {props.elementConfig.options.map((opt) => (
                            <label key={opt.value} className="btn btn-group-checkbox"
                                htmlFor={opt.id}>
                                <input type="checkbox"
                                    id={opt.id} value={opt.value}
                                    name="chkboxOptions"
                                    defaultChecked={opt.defaultChecked} />
                                <span className="input-label-wrapper">{opt.displayValue}</span>
                            </label>
                        ))}
                    </div>
                </div>
            break;
        case ('checkbox'):
            inputElement = <div className="input-group">
                {props.elementConfig.options.map((opt) => (
                    <label key={opt.id} className="input-checkbox" htmlFor={opt.id}>
                        {opt.displayValue}
                        <input id={opt.id} type="checkbox" defaultChecked={opt.defaultChecked} />
                        <div className="input-indicator needsclick"></div>
                    </label>
                ))}

            </div>
            break;
        default:
            inputElement =
                <input
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change} />
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label className="Label">{props.label}</label>
            {inputElement}
            {showErrorMessgae}
        </div>
    )
}

export default input;