import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class collapse extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };


  clickHandler = () => {
      this.props.handleClick(this.props.label);
  }

  render() {
    const {
        clickHandler,
        props: {isOpen, label},
    } = this;

    return (
      <div>
        <button  className="btn btn-primary collapse-toggle" 
            aria-expanded="false"
            data-collapse=""
            onClick={clickHandler}>
            {label}
        </button>
        {isOpen && (
            <div className="collapse-inner">
                {this.props.children}
            </div>
        )}
      </div>
    )
  }
}
