import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitStep1 } from '../actions/action';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Step1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ownerTitle: "mr",
            ownerName: "Jhon Miller",
            agreementDate: new Date(),
            monthlyRent: 2000,
        }
        this.handleMe = this.handleMe.bind(this);
        this.saveStep1 = this.saveStep1.bind(this);
    }

    handleMe(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    saveStep1(e) {
        const data = {
            ownerTitle: this.state.ownerTitle,
            ownerName: this.state.ownerName,
            agreementDate: this.state.agreementDate,
            monthlyRent: this.state.monthlyRent,
        }
        this.props.submitStep1(data);
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="ownerTitle">Owner Title</Label>
                            <Input type="select" name="ownerTitle" id="ownerTitle">
                                <option value="mr">Mr</option>
                                <option value="ms">Ms</option>
                                <option value="mrs">Mrs</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="ownerName">Owner name</Label>
                            <Input type="text" name="ownerName" id="ownerName" placeholder="Enter owner name here" onChange={this.handleMe} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="agreementDate">Agreement date</Label>
                            <Input type="date" name="agreementDate" id="agreementDate" placeholder="Enter agreement date here" onChange={this.handleMe} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="monthlyRent">Monthly rent</Label>
                            <Input type="text" name="monthlyRent" id="monthlyRent" placeholder="Enter monthly rent here" onChange={this.handleMe} />
                        </FormGroup>
                        <Button id="submitStep1" name="submitStep1" onClick={this.saveStep1}>Submit</Button>
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}

Step1.propTypes = {
    submitStep1: PropTypes.func.isRequired
}


export default connect(null, { submitStep1 })(Step1)