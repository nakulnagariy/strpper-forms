import React, { Component } from 'react'
import * as actionTypes from '../../actions/type'
import { connect } from 'react-redux'
import { withFormik, Form, Field } from 'formik'
// import RadioButtonGroup from '../FormComponents/buttons/radioButtonGroup'
import * as Yup from 'yup'
import DatePicker from "react-datepicker"
import addDays from "date-fns/addDays"
import subDays from "date-fns/subDays"

import "react-datepicker/dist/react-datepicker.css";

class FormikForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            agreementDate: new Date(),
        }
    }

    handleChange = (date) => {
        console.log('handle change: ', date)
        this.setState({
            agreementDate: date
        });
    }

    componentDidUpdate() {
        //     console.log('component did update')
        //     const nodeWithError = document.querySelectorAll('.input-group-alert input');
        //     if (nodeWithError.length > 0) {
        //         document.querySelectorAll('.input-group-alert input')[0].focus();
        //         //document.querySelectorAll('.input-group-alert input')[0].scrollIntoView({ behavior: 'smooth' });
        //     }
    }


    render() {
        const {
            errors,
            touched,
            values
        } = this.props;

        // const { value, error, touched, label, className, children } = this.props;

        const ReactDatePicker = ((
            {
                field: { name, value, onChange, onBlur },
            }
        ) => (
                <React.Fragment>
                    <DatePicker placeholderText="Click to select a date"
                        selected={this.state.agreementDate}
                        onChange={this.handleChange}
                        minDate={subDays(new Date(), 45)}
                        maxDate={addDays(new Date(), 45)}
                        dateFormat="dd/MM/yyyy"
                        filterDate={this.isWeekday}
                    />
                </React.Fragment>
            ));

        const ReactDatePickerGroup = ({ children }) => {
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            );
        };
        // console.log(this.props.savedDataToStore)

        const tanentTitleOpt = [
            { name: "Mr", id: "ttmr", val: "Mr", defaultChecked: true, },
            { name: "Mrs", id: "ttmrs", val: "Mrs" },
            { name: "Miss", id: "ttmissb", val: "Miss" },
            { name: "Ms", id: "ttms", val: "Ms" }
        ];

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


        return (
            <Form>
                <div className="container my-4">
                    <div className={`input-group ${errors.email && touched.email ? 'input-group-alert' : ''}`} >
                        <label htmlFor="email" >Email: </label>
                        <Field id="email" type="email" name="email" placeholder="Email" />
                        {errors.email && touched.email && <small className="feedback">{errors.email}<span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                    </div>

                    <div className={`input-group ${errors.amount && touched.amount ? 'input-group-alert' : ''}`} >
                        <label htmlFor="amount" >Amount: </label>
                        <Field id="amount" type="text" name="amount" placeholder="Amount" />
                        {errors.amount && touched.amount && <small className="feedback">{errors.amount}<span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                    </div>

                    <div className={`input-group ${errors.password && touched.password ? 'input-group-alert' : ''}`} >
                        <label htmlFor="password">Password: </label>
                        <Field id="password" type="password" name="password" placeholder="Password" />
                        {errors.password && touched.password && <small className="feedback">{errors.password}<span role="img" aria-label="confuse emoji">&#x1F633;</span></small>}
                    </div>

                    <ReactDatePickerGroup
                        value={this.state.agreementDate}
                        error={errors.agreementDate}
                        touched={touched.agreementDate}
                        name="agreementDate">
                        <div className={`input-group ${errors.agreementDate && touched.agreementDate ? 'input-group-alert' : ''}`}>
                            <label htmlFor="agreementDate">Agreement date: </label>
                            <Field component={ReactDatePicker} />
                            {errors.agreementDate &&
                                touched.agreementDate &&
                                <small className="feedback">{errors.agreementDate}
                                    <span role="img" aria-label="confuse emoji"> &#x1F633;</span>
                                </small>}
                        </div>
                    </ReactDatePickerGroup>

                    <RadioButtonGroup
                        id="tenantTitle"
                        value={values.tenantTitle}
                        error={errors.tenantTitle}
                        touched={touched.tenantTitle}
                    >
                        <div className={`input-group ${errors.tenantTitle && touched.tenantTitle ? 'input-group-alert' : ''}`}>
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

                    <div className={`input-group select `} >
                        <label htmlFor="select">Plan: </label>
                        <Field id="select" component="select" name="plan">
                            <option value="free">Free</option>
                            <option value="premium">Premium</option>
                        </Field>
                        <span className="select-chevron"></span>
                    </div>


                    <div className={`input-group `}>
                        <label className="input-checkbox" htmlFor="newsletter">
                            <span>News letter <span role="img" aria-label="confuse emoji">&spades; &#9732; &#x2639; &#x1F601; &#x1F633; &#x1F615;</span></span>
                            <Field id="newsletter" name="newsletter" type="checkbox" checked={values.newsletter} />
                            <div className="input-indicator needsclick"></div>
                        </label>
                    </div>
                    <div className="col-md-4 mt-2 pl-0">
                        <button className="btn btn-danger btn-block" type="submit" name="submitStep1">Submit</button>
                    </div>
                </div>
            </Form>
        )
    }
}

const formmikApp = withFormik({
    mapPropsToValues({ email, password, newsletter, plan, amount, agreementDate, tenantTitle }) {
        return {
            email: email || '',
            password: password || '',
            newsletter: newsletter || true,
            plan: plan || 'free',
            amount: amount || '',
            agreementDate: agreementDate || '',
            tenantTitle: tenantTitle || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Entered email is not valid. Please enter the valid email.').required('Email is required.'),
        password: Yup.string().min(9, 'Password has to be atleast 9 charactor long.').required('Password is required.'),
        amount: Yup.number().min(1000, 'Amount has to be min 1000')
            .max(10000, 'Amount can not max 10000')
            .typeError('Amount must be a number')
            .positive('Amount always has to to be positive')
            .integer('Amount must be an integer')
            .required('Amount is required'),
        agreementDate: Yup.string()
            .typeError('Agreement date has to be in DD/MM/YYYY format.')
            .required('Agreement date is required'),
        tenantTitle: Yup.string().required("A radio option is required"),
    }),
    handleSubmit(values, { props }) {
        props.saveFormikForm(values)
    }
})(FormikForm)


const mapStateToProps = state => {
    return {
        savedDataToStore: state.formikReducer.saveFormik
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveFormikForm: data => dispatch({
            type: actionTypes.SAVE_FORMIK,
            payload: data
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(formmikApp)

