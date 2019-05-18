import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { saveFirstStep } from '../../actions/action';
import PropTypes from 'prop-types';
import Pikaday from 'pikaday';
// import Moment from 'moment';
// import { SAVE_FIRST_STEP, SAVE_SECOND_STEP } from '../../actions/type';
import { SAVE_FIRST_STEP } from '../../actions/type';
import RadioButtonGroup from '../FormComponents/buttons/radioButtonGroup'
import TextInput from '../FormComponents/textInput'
import SelectInput from '../FormComponents/select'
import DateInput from '../FormComponents/DateInput'
import './form.scss'

class Step1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tenantTitle: "Mr",
            tenantName: "",
            errIn_tenantName: false,

            tenantIsA: "Son",
            tenantFatherHusbandName: "",
            errIn_tenantFatherHusbandName: false,

            tenantAddress: "",
            errIn_tenantAddress: false,

            ownerTitle: "Mr",
            ownerName: "",
            errIn_ownerName: false,

            ownerIsA: "",
            ownerFatherHusbandName: "",
            errIn_ownerFatherHusbandName: false,

            ownerAddress: "",
            errIn_ownerAddress: false,

            advanceAmount: "",
            errIn_advanceAmount: false,

            monthlyRent: "",
            errIn_monthlyRent: false,

            rentedPropertyState: "Karnataka",
            errIn_rentedPropertyState: false,

            rentedPropertyAddress: "",
            errIn_rentedPropertyAddress: false,

            agreementDate: "",
            errIn_agreementDate: false,

            propertyDetailsFixtures: "",
            errIn_propertyDetailsFixtures: false,

            other: "",
            collapse: false,
            
        }

        this.collapseContainer = React.createRef();
        this.testingRef = React.createRef();
    }

    componentDidMount() {
        new Pikaday({
            field: document.getElementById('agreementDate'),
            format: 'DD/MM/YYYY',
            onSelect: function() {
                console.log(this.getMoment().format('DD/MM/YYYY'));
            }
        });
    }

    handleMe = (e) => {
        if(e.target.value.trim() === "") {
            this.setState({
                ['errIn_' + e.target.id] : true,
            })
        }else {
            this.setState({
                ['errIn_' + e.target.id] : false,
                [e.target.id] : e.target.value
            })
        // console.log(e +' : '+ e.target.value)
        }
    }

    handleRadio = (e) => {
        // let node = this.testingRef;
        // console.log("radio refs node::", node.current.querySelector('[type="radio"]:checked').value)
    }

    collapse = (e) => {
        e.preventDefault();
        this.setState((prevState, props)=>{
            return {collapse: !prevState.collapse }
        })
    }
    
    validateForm = () => {

    }


    saveStep1 = (e) => {
        // const feedback  = this.validateForm();
        // console.log(document.querySelectorAll('.input-group'))
        this.setState((prevState, props)=>{
            return {collapse: true }
        })

        // console.log(this.testingRef.current.value)
        setTimeout(() => {
            if(this.testingRef.current.value === "") {
                this.setState((prevState, props)=>{
                    return {
                        errIn_tenantName: true
                    }
                })
                this.testingRef.current.focus();
            }
        }, 2000);

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
                <div className="container-fluid ">
                    <div className="container">
                        <div className="ownerTenantDetailsContainer p-y-4">
                            <div className="row">
                                <div className="col-9 col-lg-9 col-md-9 col-sm-12 align-self-center">
                                    <p>Enter your owner & Tenant details here by clicking on the<strong> Edit</strong> button.</p>
                                </div>
                                <div className="col-3 col-lg-3 col-md-3 col-sm-12 text-md-right">
                                    <button href="#ownerTenantDetailsContainerCollapse" className="btn btn-primary "
                                        aria-expanded="false" aria-controls="collapse1" data-collapse=""
                                        onClick={this.collapse}>Update Details</button>
                                </div>
                            </div>
                        </div>
                        {this.state.collapse ? (<div className="ownerTenantDetailsContainer">
                            <div className="" id="ownerTenantDetailsContainerCollapse" role="tabpanel"
                                aria-hidden="true" ref={this.collapseContainer}>
                                <div className="collapse-inner">
                                    <div className="row">
                                        <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                            <h4 className="primary">Tenant details</h4>
                                            <RadioButtonGroup label = "Tenant title & name"
                                                
                                                radioName = "tenantTitle"
                                                handleChange={this.handleMe}
                                                className = "mb-0"
                                                opts = {[
                                                    { name: "Mr", id: "ttmr", val:"Mr", defaultChecked:true, }, 
                                                    { name: "Mrs", id: "ttmrs", val:"Mrs" }, 
                                                    { name: "Miss", id: "ttmissb", val:"Miss" },
                                                    { name: "Ms", id: "ttms", val:"Ms" }
                                                    ]}
                                            />{" "}
                                            <TextInput id = "tenantName"
                                                name = "tenant name"
                                                ref={this.testingRef}
                                                className = ""
                                                disabled = { false }
                                                touched = { this.state.errIn_tenantName }
                                                error = "Please enter your tenant name"
                                                placeholder = "Enter your tenant name"
                                                maxLength = {40}
                                                handleChange = {this.handleMe}
                                            />{" "}
                
                
                                            <RadioButtonGroup label = "Is/A - Father/Husband name(optional)"
                                                id="tenantIsA"
                                                radioName = "tenantIsA"
                                                handleChange={this.test}
                                                className = "mb-0"
                                                opts = {[
                                                    { name: "Son", id: "ttson", val:"Son", defaultChecked:true, }, 
                                                    { name: "Daughter", id: "ttdau", val:"Daughter" }, 
                                                    { name: "Wife", id: "ttwife", val:"Wife" }
                                                    ]}
                                            />{" "}
                
                                            <TextInput id = "tenantFatherHusbandName"
                                                name = "tenantFatherHusbandName"
                                                className = ""
                                                disabled = { false }
                                                touched = { this.state.errIn_tenantFatherHusbandName }
                                                error = "Please enter father/husband name"
                                                placeholder = "Enter father/husband name"
                                                maxLength = {40}
                                                handleChange = {this.handleMe}
                                            />{" "}
                
                                            <TextInput id = "tenantAddress"
                                                name = "tenantAddress"
                                                label = "Tenant's Address With Pincode"
                                                className = ""
                                                disabled = { false }
                                                touched = { this.state.errIn_tenantAddress }
                                                error = "Please Tenant's Address With Pincode"
                                                placeholder = "Type address eg: 720 Bourke Street, Docklands VIC 3008"
                                                maxLength = {70}
                                                handleChange = {this.handleMe}
                                            />{" "}
                
                                        </div>
                
                
                                        <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                            <h4>Owner details</h4>
                                            <RadioButtonGroup label = "Owner title & name"
                                                id="ownerTitle"
                                                radioName = "ownerTitle"
                                                handleChange={this.test}
                                                className = "mb-0"
                                                opts = {[
                                                    { name: "Mr", id: "owmr", val:"Mr", defaultChecked:true, }, 
                                                    { name: "Mrs", id: "owmrs", val:"Mrs" }, 
                                                    { name: "Miss", id: "owmissb", val:"Miss" },
                                                    { name: "Ms", id: "owms", val:"Ms" }
                                                    ]}
                                            />{" "}
                                            <TextInput id = "ownerName"
                                                name = "owner name"
                                                className = ""
                                                disabled = { false }
                                                touched = { this.state.errIn_ownerName }
                                                error = "Please enter your owner name"
                                                placeholder = "Enter your owner name"
                                                maxLength = {40}
                                                handleChange = {this.handleMe}
                                            />{" "}
                                            
                                            <RadioButtonGroup label = "Is/A - Father/Husband name(optional)"
                                                id="ownerIsA"
                                                radioName = "ownerIsA"
                                                handleChange={this.test}
                                                className = "mb-0"
                                                opts = {[
                                                    { name: "Son", id: "owson", val:"Son", defaultChecked:true, }, 
                                                    { name: "Daughter", id: "owdau", val:"Daughter" }, 
                                                    { name: "Wife", id: "owwife", val:"Wife" }
                                                    ]}
                                            />{" "}

                                            <TextInput id = "ownerFatherHusbandName"
                                                name = "ownerFatherHusbandName"
                                                className = ""
                                                disabled = { false }
                                                touched = { this.state.errIn_ownerFatherHusbandName }
                                                error = "Please enter father/husband name"
                                                placeholder = "Enter father/husband name"
                                                maxLength = {40}
                                                handleChange = {this.handleMe}
                                            />{" "}
                
                                            <TextInput id = "ownerAddress"
                                                name = "ownerAddress"
                                                label = "Owner's Address With Pincode"
                                                className = ""
                                                disabled = { false }
                                                touched = { this.state.errIn_ownerAddress }
                                                error = "Please Owner's Address With Pincode"
                                                placeholder = "Type address eg: 720 Bourke Street, Docklands VIC 3008"
                                                maxLength = {70}
                                                handleChange = {this.handleMe}
                                            />{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>) : ""}   
                    </div>
                
                    <div className="container my-4">
                        <h2>Your rent details</h2><hr />
                        <div className="row">
                            <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                <h4>Clauses of agreement</h4><hr />
                                <TextInput 
                                    type = "number"
                                    label = "Advance amount paid"
                                    id = "advanceAmount"
                                    name = "advanceAmount"
                                    className = ""
                                    disabled = { false }
                                    touched = { this.state.errIn_advanceAmount }
                                    error = "Please enter advance amount"
                                    placeholder = "Enter advance amount"
                                    maxLength = {40}
                                    handleChange = {this.handleMe}
                                />{" "}
                
                                <TextInput 
                                    type = "number"
                                    label = "Monthly rent"
                                    id = "monthlyRent"
                                    name = "monthlyRent"
                                    className = ""
                                    disabled = { false }
                                    touched = { this.state.errIn_ownerName }
                                    error = "Please enter monthly rent"
                                    placeholder = "Enter monthly rent"
                                    maxLength = {40}
                                    handleChange = {this.handleMe}
                                />{" "}
                
                                <SelectInput 
                                    id = "rentedPropertyState"
                                    label = "Select state of property"
                                    opts = {[
                                        { name: "Please make your selection", val: "" }, 
                                        { name: "Karnataka", val: "karnataka" }, 
                                        { name: "Delhi", val: "delhi" },
                                        { name: "Telangana", val: "telangana" }, 
                                        { name: "Tamilnadu", val: "tamilnadu" },
                                        { name: "Uttar Pradesh", val: "up" }
                                        ]}
                                    disabled = { false }
                                    touched = { this.state.errIn_rentedPropertyState }
                                    error = "Please correct your selection"
                                    handleChange = {this.handleSelect}
                                />{" "}
                
                                <TextInput 
                                    type = "text"
                                    label = "Address of rented property"
                                    id = "rentedPropertyAddress"
                                    name = "rentedPropertyAddress"
                                    className = ""
                                    disabled = { false }
                                    touched = { this.state.errIn_rentedPropertyAddress }
                                    error = "Please address of rented property"
                                    placeholder = "Enter address of rented property"
                                    maxLength = {40}
                                    handleChange = {this.handleMe}
                                />{" "}
                            </div>
                            <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                <h4>&nbsp;</h4><hr />
                                <DateInput 
                                    type = "text"
                                    label = "Agreement date"
                                    id = "agreementDate"
                                    name = "agreementDate"
                                    className = ""
                                    disabled = { false }
                                    touched = { this.state.errIn_agreementDate }
                                    error = "Please agreement date"
                                    placeholder = "Enter agreement date"
                                    maxLength = {40}
                                    handleChange = {this.handleMe}
                                />{" "}
                
                                <TextInput 
                                    id = "propertyDetailsFixtures"
                                    name = "propertyDetailsFixtures"
                                    label = "Property details/fixtures"
                                    className = ""
                                    disabled = { false }
                                    touched = { this.state.errIn_propertyDetailsFixtures }
                                    error = "Please enter property details/fixtures"
                                    placeholder = "Type address eg: 720 Bourke Street, Docklands VIC 3008"
                                    maxLength = {70}
                                    handleChange = {this.handleMe}
                                />{" "}
                
                                <TextInput 
                                    id = "other"
                                    name = "other"
                                    label = "Other (E.g. Partners Details)"
                                    className = ""
                                    disabled = { false }
                                    touched = { false }
                                    error = "Please enter other (E.g. Partners Details)"
                                    placeholder = "Enter other (E.g. Partners Details)"
                                    maxLength = {70}
                                    handleChange = {this.handleMe}
                                />{" "}
                            </div>
                        </div>
                
                        <div className="col-md-4 mt-2 pl-0">
                            <button id="submitStep1" className="btn btn-danger btn-block" name="submitStep1" onClick={this.saveStep1}>Next</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Step1.propTypes = {
    saveFirstStep: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        firstStepState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveFirstStep: (data) => dispatch({
            type: SAVE_FIRST_STEP,
            payload: data
        })
    };
};


// @param  connect(mapStateToProps, mapDispatchToProp)(component)
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Step1)