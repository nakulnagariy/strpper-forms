import React from 'react'
import PropTypes from 'prop-types'
import './accordion.css'

const Accordion = (props) => {
    let accordionType = ' accordion '
    switch (props.type) {
        case 'lg':
            accordionType = accordionType + 'accordion-lg';
            break;
        case 'icon':
            accordionType = accordionType + 'accordion-icon';
            break;
        default:
            accordionType = 'accordion';
            break;
    }
    return (
        <div className={accordionType}>
            <div className="accordion-header">
                <a className="collapse-toggle collapsed" href="#accordion1d" aria-expanded="false" aria-controls="accordion1d" data-collapse="">
                    <span className="icon-wrapper">
                        <svg className="icon icon-stroke text-highlight-1" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path className="currentColor" vector-effect="non-scaling-stroke" d="M46 15.5L28.9 45.4l-15.3-8.8"></path>
                        </svg>
                    </span>
                    <span>Accordion Header First</span>
                </a>
            </div>
            <div className="accordion-panel collapse collapsed" id="accordion1d" role="tabpanel" aria-hidden="true" style="height: 368px;">
                <div className="collapse-inner">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    
}

export default Accordion;
