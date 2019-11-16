import React, { Component } from 'react'
import * as actionTypes from '../../actions/type'
import { connect } from 'react-redux'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
// import TextInput from '../FormComponents/textInput'
// import SelectInput from '../FormComponents/select'
// import DateInput from '../FormComponents/DateInput'
import DatePicker from "react-datepicker"
import addDays from "date-fns/addDays"
import subDays from "date-fns/subDays"

class FirstStepWithFormik extends Component {
    constructor(props) {
        super(props);
        this.collapseContainer = React.createRef();
    }
    state = {
        collapse: false,
        agreementDate: new Date(),
    }

    handleChange = (date) => {
        this.setState({
            agreementDate: date
        });
    }


    collapse = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            return { collapse: !prevState.collapse }
        })
    }

    handleRadio = () => {
        Form.setFieldValue('tenantTitle', 'xxx')
    }
    render() {
        const reactDatePicker = ({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.

        }) => (
                <div className={`input-group ${errors[field.name] && touched[field.name] ? 'input-group-alert' : ''}`}>
                    <label htmlFor="agreementDate">Agreement date: </label>
                    <DatePicker placeholderText="Click to select a date"
                        selected={this.state.agreementDate}
                        onChange={this.handleChange}
                        minDate={subDays(new Date(), 45)}
                        maxDate={addDays(new Date(), 45)}
                        dateFormat="dd/MM/yyyy"
                        filterDate={this.isWeekday}
                        data-test={errors[field.name] + ':::' + touched[field.name] + ':::'}
                    />
                    {errors[field.name] &&
                        touched[field.name] &&
                        <small className="feedback">{errors[field.name]}
                            <span role="img" aria-label="confuse emoji"> &#x1F633;</span>
                        </small>}
                </div>
            );

        const tanentTitleOpt = [
            { name: "Mr", id: "ttmr", val: "Mr", defaultChecked: true, },
            { name: "Mrs", id: "ttmrs", val: "Mrs" },
            { name: "Miss", id: "ttmissb", val: "Miss" },
            { name: "Ms", id: "ttms", val: "Ms" }
        ]

        const ownerTitleOpt = [
            { name: "Mr", id: "owmr", val: "Mr", defaultChecked: true, },
            { name: "Mrs", id: "owmrs", val: "Mrs" },
            { name: "Miss", id: "owmissb", val: "Miss" },
            { name: "Ms", id: "owms", val: "Ms" }
        ]

        const RadioButton = ({
            field: { name, value, onChange, onBlur }, // { name, value, onChange, onBlur }
            id,
            defaultValue,
            label,
            className,
            ...props
        }) => (
                <React.Fragment>
                    {/*label ? (<label>{label}</label>) : (<label className="sr-only">{label}</label>)*/}

                    <input name={name}
                        id={id}
                        type="radio"
                        value={defaultValue} // could be something else for output?
                        checked={defaultValue === value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className=''
                        {...props} />
                    <span className="input-label-wrapper">{label}</span>
                </React.Fragment>
            )

        // Radio group
        const RadioButtonGroup = ({ children }) => {
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            );
        };

        const {
            errors,
            touched,
            values,
            isSubmitting,
            isValidating
        } = this.props;

        return (
            <Form>
                <div className="container-fluid ">
                    <div className="container">
                        <div className="ownerTenantDetailsContainer p-y-4">
                            <div className="row">
                                <div className="col-9 col-lg-9 col-md-9 col-sm-12 align-self-center">
                                    <p>Enter your owner & tenant details here by clicking on the<strong> Edit</strong> button.</p>
                                </div>
                                <div className="col-3 col-lg-3 col-md-3 col-sm-12 text-md-right">
                                    <button href="#ownerTenantDetailsContainerCollapse" className="btn btn-primary "
                                        aria-expanded="false" aria-controls="collapse1" data-collapse=""
                                        onClick={this.collapse}>Edit</button>
                                </div>
                            </div>
                        </div>
                        {this.state.collapse ? (
                            <div className="" id="ownerTenantDetailsContainerCollapse" role="tabpanel"
                                aria-hidden="true" ref={this.collapseContainer}>
                                <div className="container my-2">
                                    <div className="row">
                                        <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                            <h4 className="primary">Tenant details</h4>

                                            <RadioButtonGroup
                                                id="tenantTitle"
                                                value={values.tenantTitle}
                                                error={errors.tenantTitle}
                                                touched={touched.tenantTitle}
                                            >
                                                <div className={`input-group mb-0 mt-2 ${errors.tenantTitle && touched.tenantTitle ? 'input-group-alert' : ''}`}>
                                                    <div className="btn-group btn-group-options btn-group-options-highlight-2 m-b-1">
                                                        {tanentTitleOpt.map((opt) => (
                                                            <label className="btn btn-group-radio"
                                                                htmlFor={opt.id}
                                                                key={opt.id}>
                                                                <Field
                                                                    component={RadioButton}
                                                                    name="tenantTitle"
                                                                    defaultValue={opt.name}
                                                                    label={opt.name}
                                                                    id={opt.id}
                                                                />
                                                            </label>
                                                        ))}
                                                    </div>
                                                    {errors.tenantTitle && touched.tenantTitle && <small className="feedback">{errors.tenantTitle}<span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                                </div>
                                            </RadioButtonGroup>

                                            <div className={`input-group ${errors.tenantName && touched.tenantName ? 'input-group-alert' : ''}`} >
                                                <Field
                                                    id="tenantName"
                                                    type="text"
                                                    name="tenantName"
                                                    placeholder="Please enter your tenant name" />
                                                {errors.tenantName && touched.tenantName && <small className="feedback">{errors.tenantName} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                            </div>

                                            <div className={`input-group ${errors.tenantFatherHusbandName && touched.tenantFatherHusbandName ? 'input-group-alert' : ''}`} >
                                                <Field
                                                    id="tenantFatherHusbandName"
                                                    type="text"
                                                    name="tenantFatherHusbandName"
                                                    placeholder="Please enter father/husband name" />
                                                {errors.tenantFatherHusbandName && touched.tenantFatherHusbandName && <small className="feedback">{errors.tenantFatherHusbandName} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                            </div>

                                            <div className={`input-group ${errors.tenantAddress && touched.tenantAddress ? 'input-group-alert' : ''}`} >
                                                <label htmlFor="tenantAddress" >Tenant's Address With Pincode: </label>
                                                <Field
                                                    id="tenantAddress"
                                                    type="text"
                                                    name="tenantAddress"
                                                    placeholder="Please enter tenant's address with pincode" />
                                                {errors.tenantAddress && touched.tenantAddress && <small className="feedback">{errors.tenantAddress} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                            </div>

                                        </div>

                                        <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                            <h4>Owner details</h4>
                                            <RadioButtonGroup
                                                id="ownerTitle"
                                                value={values.ownerTitle}
                                                error={errors.ownerTitle}
                                                touched={touched.ownerTitle}
                                            >
                                                <div className={`input-group mb-0 mt-2 ${errors.ownerTitle && touched.ownerTitle ? 'input-group-alert' : ''}`}>
                                                    <div className="btn-group btn-group-options btn-group-options-highlight-2 m-b-1">
                                                        {ownerTitleOpt.map((opt) => (
                                                            <label className="btn btn-group-radio"
                                                                htmlFor={opt.id}
                                                                key={opt.id}>
                                                                <Field
                                                                    component={RadioButton}
                                                                    name="ownerTitle"
                                                                    defaultValue={opt.name}
                                                                    label={opt.name}
                                                                    id={opt.id}
                                                                />
                                                            </label>
                                                        ))}
                                                    </div>
                                                    {errors.ownerTitle && touched.ownerTitle && <small className="feedback">{errors.ownerTitle}<span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                                </div>
                                            </RadioButtonGroup>

                                            <div className={`input-group ${errors.ownerName && touched.ownerName ? 'input-group-alert' : ''}`} >
                                                <Field
                                                    id="ownerName"
                                                    type="text"
                                                    name="ownerName"
                                                    placeholder="Enter your owner name" />
                                                {errors.ownerName && touched.ownerName && <small className="feedback">{errors.ownerName} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                            </div>


                                            <div className={`input-group ${errors.ownerFatherHusbandName && touched.ownerFatherHusbandName ? 'input-group-alert' : ''}`} >
                                                <Field
                                                    id="ownerFatherHusbandName"
                                                    type="text"
                                                    name="ownerFatherHusbandName"
                                                    placeholder="Please enter father/husband name" />
                                                {errors.ownerFatherHusbandName && touched.ownerFatherHusbandName && <small className="feedback">{errors.ownerFatherHusbandName} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                            </div>

                                            <div className={`input-group ${errors.ownerAddress && touched.ownerAddress ? 'input-group-alert' : ''}`} >
                                                <label htmlFor="ownerAddress" >Owner's Address With Pincode: </label>
                                                <Field
                                                    id="ownerAddress"
                                                    type="text"
                                                    name="ownerAddress"
                                                    placeholder="Please enter owner's address with pincode" />
                                                {errors.ownerAddress && touched.ownerAddress && <small className="feedback">{errors.ownerAddress} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : ''}
                    </div>

                    <div className="container my-2">
                        <h2>Your rent details</h2><hr />
                        <div className="row">
                            <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                <h4 className="mt-0 mb-4">Clauses of agreement</h4>
                                <div className={`input-group ${errors.advanceAmount && touched.advanceAmount ? 'input-group-alert' : ''}`} >
                                    <label htmlFor="advanceAmount">Advance amount paid: </label>
                                    <Field
                                        id="advanceAmount"
                                        type="text"
                                        name="advanceAmount"
                                        placeholder="Please enter advance amount paid" />
                                    {errors.advanceAmount && touched.advanceAmount && <small className="feedback">{errors.advanceAmount} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                </div>

                                <div className={`input-group ${errors.monthlyRent && touched.monthlyRent ? 'input-group-alert' : ''}`} >
                                    <label htmlFor="monthlyRent">Monthly rent: </label>
                                    <Field
                                        id="monthlyRent"
                                        type="text"
                                        name="monthlyRent"
                                        placeholder="Please enter monthly rent" />
                                    {errors.monthlyRent && touched.monthlyRent && <small className="feedback">{errors.monthlyRent} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                </div>

                                <div className={`input-group select `} >
                                    <label htmlFor="rentedPropertyState">Select state of property: </label>
                                    <Field id="rentedPropertyState" component="select" name="rentedPropertyState">
                                        <option value="karnataka">Karnataka</option>
                                        <option value="delhi">Delhi</option>
                                    </Field>
                                    <span className="select-chevron"></span>
                                </div>

                                <div className={`input-group ${errors.rentedPropertyAddress && touched.rentedPropertyAddress ? 'input-group-alert' : ''}`} >
                                    <label htmlFor="rentedPropertyAddress">Address of rented property: </label>
                                    <Field
                                        id="rentedPropertyAddress"
                                        type="text"
                                        name="rentedPropertyAddress"
                                        placeholder="Please enter address of rented property" />
                                    {errors.rentedPropertyAddress && touched.rentedPropertyAddress && <small className="feedback">{errors.rentedPropertyAddress} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                </div>

                            </div>
                            <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                                <h4 className='mt-0 mb-4'>&nbsp;</h4>
                                <Field name="agreementDate" component={reactDatePicker} />

                                <div className={`input-group ${errors.propertyDetailsFixtures && touched.propertyDetailsFixtures ? 'input-group-alert' : ''}`} >
                                    <label htmlFor="propertyDetailsFixtures">Property details/fixtures: </label>
                                    <Field
                                        id="propertyDetailsFixtures"
                                        type="text"
                                        name="propertyDetailsFixtures"
                                        placeholder="Please enter property details/fixtures" />
                                    {errors.propertyDetailsFixtures && touched.propertyDetailsFixtures && <small className="feedback">{errors.propertyDetailsFixtures} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                </div>


                                <div className={`input-group ${errors.other && touched.other ? 'input-group-alert' : ''}`} >
                                    <label htmlFor="other">Other (E.g. Partners Details): </label>
                                    <Field
                                        id="other"
                                        type="text"
                                        name="other"
                                        placeholder="Please enter  other (E.g. Partners Details)" />
                                    {errors.other && touched.other && <small className="feedback">{errors.other} <span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="col-6"></div>
                        <div className="col-6 pl-0">
                            <button type='submit' className="btn btn-danger btn-block" disabled={isSubmitting || isValidating}>Next</button>
                        </div>
                    </div>
                </div>
            </Form>
        )
    }
}

const formikFirstStep = withFormik({
    mapPropsToValues({ tenantTitle, tenantName, tenantFatherHusbandName, tenantAddress, ownerName, ownerFatherHusbandName, ownerAddress, advanceAmount, monthlyRent, rentedPropertyAddress, agreementDate }) {
        return {
            tenantTitle: tenantTitle || '',
            tenantName: tenantName || '',
            tenantFatherHusbandName: tenantFatherHusbandName || '',
            tenantAddress: tenantAddress || '',
            ownerName: ownerName || '',
            ownerFatherHusbandName: ownerFatherHusbandName || '',
            ownerAddress: ownerAddress || '',
            advanceAmount: advanceAmount || '',
            monthlyRent: monthlyRent || '',
            rentedPropertyAddress: rentedPropertyAddress || '',
            agreementDate: agreementDate || new Date()
        }
    },
    validationSchema: Yup.object().shape({
        tenantName: Yup.string().max(40, 'Please keep the name short!.').required('Please enter your tenant name.'),
        tenantFatherHusbandName: Yup.string().max(40, 'Please keep the name short!.').required('Please enter father/husband name'),
        tenantAddress: Yup.string().max(80, 'Please keep the address short!.').required('Please enter tenants address with pincode'),
        ownerName: Yup.string().max(40, 'Please keep the name short!.').required('Please enter your owner name'),
        ownerFatherHusbandName: Yup.string().max(40, 'Please keep the name short!.').required('Please enter father/husband name'),
        ownerAddress: Yup.string().max(80, 'Please keep the address short!.').required('Please enter tenants address with pincode'),
        advanceAmount: Yup.number().min(1000, 'Advance amount has to be min 1000')
            .max(10000, 'Advance amount can not max 10000')
            .typeError('Advance amount must be a number')
            .positive('Advance amount always has to to be positive')
            .integer('Advance amount must be an integer')
            .required('Advance amount is required'),
        monthlyRent: Yup.number().min(1000, 'Monthly rent has to be min 1000')
            .max(10000, 'Monthly rent can not max 10000')
            .typeError('Monthly rent must be a number')
            .positive('Monthly rent always has to to be positive')
            .integer('Monthly rent must be an integer')
            .required('Monthly rent is required'),
        rentedPropertyAddress: Yup.string().max(80, 'Please keep the address short!.').required('Please enter rented property address with pincode'),
        agreementDate: Yup.date().min(new Date(), 'Agreement date cant be the past date').required('Agreement date is required')
    }),
    handleSubmit(values, { props }) {
        console.log(values)
        props.saveFirstStepData(values)
    }
})(FirstStepWithFormik)


const mapStateToProps = state => {
    return {
        savedFirstStepDataToStore: state.firstStepReducer.saveFirstStep
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveFirstStepData: data => dispatch({
            type: actionTypes.SAVE_FIRST_STEP,
            payload: data
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(formikFirstStep)