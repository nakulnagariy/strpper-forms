import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyAccordionSection extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired,
        whichAccordion: PropTypes.string.isRequired,
    };

    onClick = () => {
        this.props.handleClick(this.props.label);
    }

    render() {
        const { 
            onClick, 
            props: {isOpen, label, whichAccordion}, 
        } = this;

        let activeWrapperClass = "accordion";
        switch(whichAccordion) {
            case 'icon':
                activeWrapperClass = activeWrapperClass + " accordion-icon";
                break;
            case 'lg':
                activeWrapperClass = activeWrapperClass + " accordion-lg";
                break;
            default: 
                activeWrapperClass = "accordion";
                break;
        }

        return (
            <div className={activeWrapperClass}>
                <div className="accordion-header">
                    <button className="collapse-toggle collapsed" 
                        aria-expanded="true" 
                        onClick={onClick}
                        aria-controls="accordion1b" data-collapse="">
                            {whichAccordion === 'icon' ? (<span className="icon-wrapper">
                                <svg className="icon icon-stroke text-success" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path className="currentColor" vectorEffect="non-scaling-stroke" d="M46 15.5L28.9 45.4l-15.3-8.8"></path></svg>
                            </span> ) : ''}
                            <span>{label}</span>
                    </button>
                </div>
                <div className="accordion-panel" role="tabpanel" aria-hidden={!isOpen}>
                    {isOpen && (
                        <div className="collapse-inner">
                            {this.props.children}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default MyAccordionSection;