import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitStep1 } from '../../actions/action';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroup, ButtonGroup, InputGroupAddon, InputGroupText  } from 'reactstrap';


class Step2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ownerTitle: "mr",
            ownerName: "Jhon Miller",
            agreementDate: new Date(),
            monthlyRent: 2000,
            modal: false
        }
        this.handleMe = this.handleMe.bind(this);
        this.saveStep2 = this.saveStep2.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    

    handleMe(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    saveStep2(e) {
        const data = {
            ownerTitle: this.state.ownerTitle,
            ownerName: this.state.ownerName,
            agreementDate: this.state.agreementDate,
            monthlyRent: this.state.monthlyRent,
        }
        this.props.submitStep1(data);
    }

    render () {

        return (
            <React.Fragment>
                <Container className="my-5"><h2>Your rent details</h2><hr />
                    <Row>
                        <Col md="5"><h4>Perticulars &amp; mailing details</h4><hr />
                            <FormGroup>
                                <Label for="stampDutyAmount">Stamp duty amount</Label>
                                <Input type="select" name="stampDutyAmount" id="stampDutyAmount" onClick={this.handleMe}>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="100">200</option>
                                    <option value="500">500</option>
                                </Input>
                            </FormGroup>

                            <Row>
                                <Col sm="3">
                                    <FormGroup>
                                        <Label>Norary seal</Label><br/>
                                        <ButtonGroup>
                                            <Button color="primary" value="Yes" onClick={this.handleMe}>Yes</Button>
                                            <Button color="primary" value="No" onClick={this.handleMe}>No</Button>
                                        </ButtonGroup>                                    
                                    </FormGroup>
                                </Col>
                                <Col sm="6">
                                    <FormGroup>
                                        <Label>Fee paid by</Label><br/>
                                        <ButtonGroup>
                                            <Button color="primary" value="1" onClick={this.handleMe}>1'st Party</Button>
                                            <Button color="primary" value="2" onClick={this.handleMe}>2'nd Party</Button>
                                        </ButtonGroup>                                    
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="emailId">Email id</Label>
                                <Input type="email" name="emailId" id="emailId" onChange={this.handleMe}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="pincode">Pincode</Label>
                                <Input name="pincode" id="pincode" onChange={this.handleMe}/>
                            </FormGroup>
                        </Col>
                        <Col md="1"></Col> 
                        <Col md="5"><h4>Details for document to be sent</h4><hr />
                            <FormGroup>
                                <Label>Postal option</Label><br/>
                                <ButtonGroup>
                                    <Button color="primary" value="Renter" onClick={this.handleMe}>Renter</Button>
                                    <Button color="primary" value="Owner" onClick={this.handleMe}>Owner</Button>
                                    <Button color="primary" value="Other" onClick={this.handleMe}>Other</Button>
                                </ButtonGroup>                                    
                            </FormGroup>                           

                            <FormGroup>
                                <Label for="contactName">Contact name</Label>
                                <Input name="contactName" id="contactName" onChange={this.handleMe}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="contactNumber">Contact number</Label>
                                <Input name="contactNumber" id="contactNumber" onChange={this.handleMe}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="mailingAddress">Mailing address</Label>
                                <Input type="textarea" name="mailingAddress" id="mailingAddress" onChange={this.handleMe}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md="4">
                            <Button id="submitStep1" className="btn btn-danger btn-block" name="submitStep2" onClick={this.toggle}>Next</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

Step2.propTypes = {
    submitStep1: PropTypes.func.isRequired
}


export default connect(null, { submitStep1 })(Step2)