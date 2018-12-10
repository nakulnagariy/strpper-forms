import React, { Component } from 'react'
import { connect } from 'react-redux';
import { saveFirstStep } from '../../actions/action';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroup, ButtonGroup, InputGroupAddon, InputGroupText, Collapse  } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Pikaday from 'pikaday';
import Moment from 'moment';

class Step1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tenantTitle: "Mr",
            tenantName: "",
            tenantIsA: "Son",
            tenantFatherHusbandName: "",
            tenantAddress: "",
            ownerTitle: "Mr",
            ownerName: "",
            ownerIsA: "",
            ownerFatherHusbandName: "",
            ownerAddress: "",
            advanceAmount: "",
            monthlyRent: "",
            rentedPropertyState: "Karnataka",
            rentedPropertyAddress: "",
            agreementDate: "",
            propertyDetailsFixtures: "",
            other: "",
            modal: false,
            collapse: false
        }
        this.handleMe = this.handleMe.bind(this);
        this.saveStep1 = this.saveStep1.bind(this);
        this.toggle = this.toggle.bind(this);
        this.collapse = this.collapse.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    componentDidMount() {
        var picker = new Pikaday({
            field: document.getElementById('agreementDate'),
            format: 'DD/MM/YYYY',
            onSelect: function() {
                console.log(this.getMoment().format('DD/MM/YYYY'));
            }
        });
    }

    handleMe(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    toggle(e) {
        this.setState({
          modal: !this.state.modal
        });
      }

    collapse(e){
        this.setState({ collapse: !this.state.collapse });
    }

    onRadioBtnClick(value, stateProp) {
        this.setState({ 
            [stateProp]: value,
         });
    }

    saveStep1(e) {
        const data = {
            tenantTitle: this.state.tenantTitle,
            tenantName: this.state.tenantName,
            tenantIsA: this.state.tenantIsA,
            tenantFatherHusbandName: this.state.tenantFatherHusbandName,
            tenantAddress: this.state.tenantAddress,
            ownerTitle: this.state.ownerTitle,
            ownerName: this.state.ownerName,
            ownerIsA: this.state.ownerIsA,
            ownerFatherHusbandName: this.state.ownerFatherHusbandName,
            ownerAddress: this.state.ownerAddress,
            advanceAmount: this.state.advanceAmount,
            monthlyRent: this.state.monthlyRent,
            rentedPropertyState: this.state.rentedPropertyState,
            rentedPropertyAddress: this.state.rentedPropertyAddress,
            agreementDate: this.state.agreementDate,
            propertyDetailsFixtures: this.state.propertyDetailsFixtures,
            other: this.state.other
        }    
        this.props.saveFirstStep(data);
    }

    render () {
        return (
            <React.Fragment>
                <Container fluid={true} className="bg-light">
                    <Container>
                        <Col>
                            <Row>
                                <div style={{padding:20}}>                                
                                    <span>Enter your owner &amp; Tenant details here by clicking on the <strong>Edit</strong> button.</span>&nbsp;
                                    <Button color="secondary" className="ghost pull-right" onClick={this.collapse}>Edit</Button>
                                </div>
                            </Row>
                        </Col>
                        <Collapse isOpen={this.state.collapse}>
                                    <Row>
                                        <Col md="5">
                                            <div className="tenantDetailsContainer">
                                                <FormGroup>                                    
                                                    <h4>Tenant details</h4>
                                                    <Label>Tenant title</Label><br/>
                                                    <ButtonGroup>
                                                        <Button color="primary" value="Mr" name="tenantTitle" onClick={() => this.onRadioBtnClick("Mr", "tenantTitle")} active={this.state.tenantTitle === "Mr"}>Mr</Button>
                                                        <Button color="primary" value="Mrs" name="tenantTitle" onClick={() => this.onRadioBtnClick("Mrs", "tenantTitle")} active={this.state.tenantTitle === "Mrs"}>Mrs</Button>
                                                        <Button color="primary" value="Miss" name="tenantTitle" onClick={() => this.onRadioBtnClick("Miss", "tenantTitle")} active={this.state.tenantTitle === "Miss"}>Miss</Button>
                                                        <Button color="primary" value="Ms" name="tenantTitle" onClick={() => this.onRadioBtnClick("Ms", "tenantTitle")} active={this.state.tenantTitle === "Ms"}>Ms</Button>
                                                    </ButtonGroup>                                    
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="tenantName">Tenant name</Label>
                                                    <Input name="tenantName" id="tenantName" placeholder="Enter tenant name here" onChange={this.handleMe} />
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label>Is/A</Label><br/>
                                                    <ButtonGroup>
                                                        <Button color="primary" value="Son" name="tenantIsA"  onClick={() => this.onRadioBtnClick("Son", "tenantIsA")} active={this.state.tenantIsA === "Son"}>Son</Button>
                                                        <Button color="primary" value="Daughter" name="tenantIsA"  onClick={() => this.onRadioBtnClick("Daughter", "tenantIsA")} active={this.state.tenantIsA === "Daughter"}>Daughter</Button>
                                                        <Button color="primary" value="Wife" name="tenantIsA"  onClick={() => this.onRadioBtnClick("Wife", "tenantIsA")} active={this.state.tenantIsA === "Wife"}>Wife</Button>
                                                    </ButtonGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="tenantFatherHusbandName">Father/Husband name(optional)</Label>
                                                    <Input name="tenantFatherHusbandName" id="tenantFatherHusbandName" placeholder="Enter father/husband name" onChange={this.handleMe} />
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="tenantAddress">Tenant's Address With Pincode</Label>
                                                    <Input type="textarea" name="tenantAddress" id="tenantAddress" onChange={this.handleMe}/>
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
                                                        <Button color="primary" value="Mr" name="ownerTitle"  onClick={() => this.onRadioBtnClick("Mr", "ownerTitle")} active={this.state.ownerTitle === "Mr"}>Mr</Button>
                                                        <Button color="primary" value="Mrs" name="ownerTitle"  onClick={() => this.onRadioBtnClick("Mrs", "ownerTitle")} active={this.state.ownerTitle === "Mrs"}>Mrs</Button>
                                                        <Button color="primary" value="Miss" name="ownerTitle"  onClick={() => this.onRadioBtnClick("Miss", "ownerTitle")} active={this.state.ownerTitle === "Miss"}>Miss</Button>
                                                        <Button color="primary" value="Ms" name="ownerTitle"  onClick={() => this.onRadioBtnClick("Ms", "ownerTitle")} active={this.state.ownerTitle === "Ms"}>Ms</Button>
                                                    </ButtonGroup>                                    
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="ownerName">Owner name</Label>
                                                    <Input name="ownerName" id="ownerName" placeholder="Enter owner name here" onChange={this.handleMe} />
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label>Is/A</Label><br/>
                                                    <ButtonGroup>
                                                        <Button color="primary" value="Son" name="ownerIsA" onClick={() => this.onRadioBtnClick("Son", "ownerIsA")} active={this.state.ownerIsA === "Son"}>Son</Button>
                                                        <Button color="primary" value="Daughter" name="ownerIsA" onClick={() => this.onRadioBtnClick("Daughter", "ownerIsA")} active={this.state.ownerIsA === "Daughter"}>Daughter</Button>
                                                        <Button color="primary" value="Wife" name="ownerIsA" onClick={() => this.onRadioBtnClick("Wife", "ownerIsA")} active={this.state.ownerIsA === "Wife"}>Wife</Button>
                                                    </ButtonGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="ownerFatherHusbandName">Father/Husband Name(Optional)</Label>
                                                    <Input name="ownerFatherHusbandName" id="ownerFatherHusbandName" placeholder="Father/Husband Name" onChange={this.handleMe} />
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="ownerAddress">Owner's Address With Pincode</Label>
                                                    <Input type="textarea" name="ownerAddress" id="ownerAddress" onChange={this.handleMe}/>
                                                </FormGroup>
                                            </div>                                
                                        </Col>
                                    </Row>
                                </Collapse>
                    </Container>
                </Container>
                
                <Container className="my-5"><h2>Your rent details</h2><hr />                    
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
                                <Label for="rentedPropertyState">Rented property State</Label>
                                <Input type="select" name="rentedPropertyState" id="rentedPropertyState" placeholder="Enter rented property location" onChange={this.handleMe}>
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
                                <Input type="text" name="agreementDate" id="agreementDate" placeholder="Enter agreement date here" onBlur={this.handleMe} />
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
                        <Col md="4">
                            <Button id="submitStep1" className="btn btn-danger btn-block" name="submitStep1" onClick={this.saveStep1}>Next</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

Step1.propTypes = {
    saveFirstStep: PropTypes.func.isRequired
}


export default connect(null, { saveFirstStep })(Step1)