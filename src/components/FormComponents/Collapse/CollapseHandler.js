import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Collapse from './collapse'

export default class CollapseHandler extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
      super(props);
      const openSections = {
          isOpen: false,
      };
      this.state = {
        openSections
      };
      
  }

  clickHanlder = label => {
      console.log('label::', label)
    const { 
        state: { openSections },
    } = this;
      const isOpen = !!openSections[label]

      this.setState({
        openSections: {
            [label]: !isOpen
        }
    });
  }

  render() {
    const {
        clickHanlder,
        props: { children },
        state: { openSections },
    } = this;
    console.log(this.state)
    return (
      <div>
        <Collapse 
            isOpen = {!!openSections[this.props.label]}
            label = {this.props.label}
            handleClick = {clickHanlder}
            >
        {children}
        </Collapse>
      </div>
    )
  }
}
