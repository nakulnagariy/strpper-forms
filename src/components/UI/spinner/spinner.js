import React from 'react';
import './spinner.scss'

const spinner = (props) => (
    <div className="spinnerWrapper">
        <img className="spinner" src="./assets/loadings/double-ring-spinner.gif" alt="spinner" />
    </div>
)

export default spinner;