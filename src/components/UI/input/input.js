import React from 'react';
import './input.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = ['input-group'];
    let showErrorMessgae = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('input-group-alert');
        showErrorMessgae = <div className="feedback">Please enter a valid {props.validType}.</div>;
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
                <select className="input-group select" onChange={props.change}>
                    {props.elementConfig.options.map((opt) =>
                        <option key={opt.value} value={opt.value}>
                            {opt.displayValue}
                        </option>
                    )}
                </select>
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