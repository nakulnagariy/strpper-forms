import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyAccordionSection from './MyAccordionSection';

class MyAccordion extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);
        const openSections = {};
        this.state = { openSections };
    }

    handleClick = label => {
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
            handleClick,
            props: { children },
            state: { openSections },
        } = this;

        return (
            <React.Fragment>
                { children.map( (child, index) => (
                    <MyAccordionSection key={index}
                        isOpen={!!openSections[child.props.label]}
                        label={child.props.label}
                        handleClick={handleClick}
                        whichAccordion={"lg"}>
                        {child.props.children}
                    </MyAccordionSection>
                )) }
            </React.Fragment>
        )
    }
}

export default MyAccordion