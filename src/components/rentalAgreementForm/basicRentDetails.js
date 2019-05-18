import React, { Component } from 'react';
import MyAccordion from '../FormComponents/MyAccordion/MyAccordion'
import CollapseHandler from '../FormComponents/Collapse/CollapseHandler'
class BasicRentDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <React.Fragment>
                <div className="bg-neutral-2">
                    <div className="container">
                        <h1>Personal Details</h1>
                        <MyAccordion>
                            <div label='Alligator Mississippiensis'>
                            <p>
                                <strong>Common Name:</strong> American Alligator
                            </p>
                            </div>
                            <div label='Alligator Sinensis'>
                            <p>
                                <strong>Common Name:</strong> Chinese Alligator
                            </p>
                            <p>
                                <strong>Distribution:</strong> Eastern China
                            </p>
                            <p>
                                <strong>Endangered Status:</strong> Critically Endangered
                            </p>
                            </div>
                        </MyAccordion>
                        <CollapseHandler label='collapsed example'>
                            <div >
                                <p>
                                    <strong>Common Name:</strong> American Alligator
                                </p>
                            </div>
                        </CollapseHandler>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BasicRentDetails;