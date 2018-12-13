import React, { Component } from 'react'
import { connect } from 'react-redux';
import { saveSecondStep } from '../../actions/action';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import store from '../../store/store';
import './form.scss'

class Step2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            stampDutyAmount: "50",
            postalLocation: "Renter",
            pincode: "",
            notarySeal: "Yes",
            feepaidBy: "1",
            offerCode: "Mr",
            contactName: "",
            contactNumber: "",
            emailId: "",
            mailingAddresss: ""
        }
        this.handleMe = this.handleMe.bind(this);
        this.saveStep2 = this.saveStep2.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    handleMe(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onRadioBtnClick(value, stateProp) {
        this.setState({ 
            [stateProp]: value,
         });

         console.log(store.getState().reducer.firstStepDetails.tenantTitle)
    }

    saveStep2(e) {
        const data = {
            stampDutyAmount: this.state.stampDutyAmount,
            postalLocation: this.state.postalLocation,
            pincode: this.state.pincode,
            notarySeal: this.state.notarySeal,
            feepaidBy: this.state.feepaidBy,
            offerCode: this.state.offerCode,
            contactName: this.state.contactName,
            contactNumber: this.state.contactName,
            emailId: this.state.emailId,
            mailingAddresss: this.state.mailingAddresss
        }    
        this.props.saveSecondStep(data);
    }

    render () {
        return (
            <React.Fragment>
                
                <Container className="my-5"><h2>Your rent details</h2><hr />                    
                    <Row><Col md="5"><h4>Particulars &amp; mailing details</h4><hr /></Col></Row>
                    <Row>
                        <Col md="5"> 
                            <FormGroup>
                                <Label for="stampDutyAmount">Stamp duty amount (INR)</Label>
                                <Input type="select" name="stampDutyAmount" id="stampDutyAmount" onChange={this.handleMe}>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="500">500</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="postalLocation">Postal Location</Label>
                                <Input type="select" name="postalLocation" id="postalLocation" onChange={this.handleMe}>
                                    <option value="Renter">Renter</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Other">Other</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="pincode">Pincode</Label>
                                <Input type="number" name="pincode" id="pincode" placeholder="Enter pincode" onChange={this.handleMe} />
                            </FormGroup>

                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label>Notary seal</Label><br/>
                                        <ButtonGroup>
                                            <Button color="primary" value="Yes" name="notarySeal" onClick={() => this.onRadioBtnClick("Yes", "notarySeal")} active={this.state.notarySeal === "Yes"}>Yes</Button>
                                            <Button color="primary" value="No" name="notarySeal" onClick={() => this.onRadioBtnClick("No", "notarySeal")} active={this.state.notarySeal === "No"}>No</Button>
                                        </ButtonGroup>                                    
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label>Fee paid by</Label><br/>
                                        <ButtonGroup>
                                            <Button color="primary" value="1" name="feepaidBy" onClick={() => this.onRadioBtnClick("1", "feepaidBy")} active={this.state.feepaidBy === "1"}>1st party</Button>
                                            <Button color="primary" value="2" name="feepaidBy" onClick={() => this.onRadioBtnClick("2", "feepaidBy")} active={this.state.feepaidBy === "2"}>2nd party</Button>
                                        </ButtonGroup>                                    
                                    </FormGroup> 
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="offerCode">Offer code</Label>
                                <Input name="offerCode" id="offerCode" placeholder="Enter offer code" onChange={this.handleMe} />
                            </FormGroup>
                        </Col>
                        <Col md="1"></Col> 
                        <Col md="5"> 
                            
                            <FormGroup>
                                <Label for="contactName">Contact name</Label>
                                <Input name="contactName" id="contactName" placeholder="Enter contact name" onChange={this.handleMe} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="contactNumber">Contact number</Label>
                                <Input type="number" name="contactNumber" id="contactNumber" placeholder="Enter contact number" onChange={this.handleMe} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="emailId">Email id</Label>
                                <Input type="email" name="emailId" id="emailId" placeholder="Enter email id" onChange={this.handleMe} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="mailingAddresss">Mailing address</Label>
                                <Input type="textarea" name="mailingAddresss" id="mailingAddresss" onChange={this.handleMe}/>
                            </FormGroup>

                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md="4">
                            <Button id="submitStep2" className="btn btn-danger btn-block" name="submitStep2" onClick={this.saveStep2}>Next</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

Step2.propTypes = {
    saveSecondStep: PropTypes.func.isRequired
}


export default connect(null, { saveSecondStep })(Step2)