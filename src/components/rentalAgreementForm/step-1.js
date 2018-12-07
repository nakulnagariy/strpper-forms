import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitStep1 } from '../../actions/action';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroup, ButtonGroup, InputGroupAddon, InputGroupText  } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Step1 extends Component {
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
        this.saveStep1 = this.saveStep1.bind(this);
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

        return (
            <React.Fragment>
                <Container className="my-5"><h2>Your rent details</h2><hr />
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Owner &amp; Tenant details</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md="5">
                                    <div className="tenantDetailsContainer">
                                        <FormGroup>                                    
                                            <h4>Tenant details</h4>
                                            <Label>Tenant title</Label><br/>
                                            <ButtonGroup>
                                                <Button color="primary" value="Mr" onClick={this.handleMe}>Mr</Button>
                                                <Button color="primary" value="Mrs" onClick={this.handleMe}>Mrs</Button>
                                                <Button color="primary" value="Miss" onClick={this.handleMe}>Miss</Button>
                                                <Button color="primary" value="Ms" onClick={this.handleMe}>Ms</Button>
                                            </ButtonGroup>                                    
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="tenantName">Tenant name</Label>
                                            <Input name="tenantName" id="tenantName" placeholder="Enter tenant name here" onChange={this.handleMe} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>Is A</Label><br/>
                                            <ButtonGroup>
                                                <Button color="primary" value="Son" onClick={this.handleMe}>Son</Button>
                                                <Button color="primary" value="Daughter" onClick={this.handleMe}>Daughter</Button>
                                                <Button color="primary" value="Wife" onClick={this.handleMe}>Wife</Button>
                                            </ButtonGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="tenantFatherHusbandName">Father/Husband Name(Optional)</Label>
                                            <Input name="tenantFatherHusbandName" id="tenantFatherHusbandName" placeholder="Father/Husband Name" onChange={this.handleMe} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="tenantAddress">Tenant's Address With Pincode</Label>
                                            <Input type="textarea" name="tenantAddress" id="tenantAddress" />
                                        </FormGroup>
                                    </div>                                
                                </Col>
                                <Col md="1"></Col>
                                <Col md="5">
                                    <div className="ownerDetailsContainer">
                                        <FormGroup>                                    
                                            <h4>Owner details</h4>
                                            <Label>Owner title</Label><br/>
                                            <ButtonGroup>
                                                <Button color="primary" value="Mr" onClick={this.handleMe}>Mr</Button>
                                                <Button color="primary" value="Mrs" onClick={this.handleMe}>Mrs</Button>
                                                <Button color="primary" value="Miss" onClick={this.handleMe}>Miss</Button>
                                                <Button color="primary" value="Ms" onClick={this.handleMe}>Ms</Button>
                                            </ButtonGroup>                                    
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="ownerName">Owner name</Label>
                                            <Input name="ownerName" id="ownerName" placeholder="Enter owner name here" onChange={this.handleMe} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>Is A</Label><br/>
                                            <ButtonGroup>
                                                <Button color="primary" value="Son" onClick={this.handleMe}>Son</Button>
                                                <Button color="primary" value="Daughter" onClick={this.handleMe}>Daughter</Button>
                                                <Button color="primary" value="Wife" onClick={this.handleMe}>Wife</Button>
                                            </ButtonGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="ownerFatherHusbandName">Father/Husband Name(Optional)</Label>
                                            <Input name="ownerFatherHusbandName" id="ownerFatherHusbandName" placeholder="Father/Husband Name" onChange={this.handleMe} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="ownerAddress">Owner's Address With Pincode</Label>
                                            <Input type="textarea" name="ownerAddress" id="ownerAddress" />
                                        </FormGroup>
                                    </div>                                
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggle}>Save</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <Row><Col md="5"><h4>Clauses of agreement</h4><hr /></Col></Row>
                    <Row>
                        <Col md="5">                                            
                            <FormGroup>
                                <Label for="advanceAmount">Advance amount paid</Label>
                                <Input type="number" name="advanceAmount" id="advanceAmount" placeholder="Enter advance amount" onChange={this.handleMe} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="monthlyRent">Monthly rent</Label>
                                <Input type="number" name="monthlyRent" id="monthlyRent" placeholder="Enter monthly rent" onChange={this.handleMe} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="rentedPropertyLoc">Rented property location</Label>
                                <Input type="select" name="rentedPropertyLoc" id="rentedPropertyLoc" placeholder="Enter rented property location" onClick={this.handleMe}>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tamilnadu">Tamilnadu</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="rentedPropertyAddress">Address of rented property</Label>
                                <Input type="textarea" name="rentedPropertyAddress" id="rentedPropertyAddress" onChange={this.handleMe}/>
                            </FormGroup>
                        </Col>
                        <Col md="1"></Col> 
                        <Col md="5"> 
                            <FormGroup>
                                <Label for="agreementDate">Agreement date</Label>
                                <Input type="date" name="agreementDate" id="agreementDate" placeholder="Enter agreement date here" onChange={this.handleMe} />
                            </FormGroup>                           

                            <FormGroup>
                                <Label for="propertyDetailsFixtures">Property details/fixtures</Label>
                                <Input type="textarea" name="propertyDetailsFixtures" id="propertyDetailsFixtures" onChange={this.handleMe}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="other">Other (E.g. Partners Details)</Label>
                                <Input type="textarea" name="other" id="other" onChange={this.handleMe}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md="3">
                            <Button id="submitStep1" className="btn btn-danger btn-block" name="submitStep1" onClick={this.toggle}>Next</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

Step1.propTypes = {
    submitStep1: PropTypes.func.isRequired
}


export default connect(null, { submitStep1 })(Step1)