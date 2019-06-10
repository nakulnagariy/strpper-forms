import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'


const formikForm = ({
    values,
    errors,
    touched
}) => {
    return (
        <Form>
            <div className="container my-4">
                <div className={`input-group ${errors.email && touched.email ? 'input-group-alert' : ''}`} >
                    <label htmlFor="email" >Email: </label>
                    <Field id="email" type="email" name="email" placeholder="Email" />
                    {errors.email && touched.email && <small className="feedback">{errors.email}</small>}
                </div>
                <div className={`input-group ${errors.password && touched.password ? 'input-group-alert' : ''}`} >
                    <label htmlFor="password">Password: </label>
                    <Field id="password" type="password" name="password" placeholder="Password" />
                    {errors.password && touched.password && <small className="feedback">{errors.password}</small>}
                </div>
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
                        <span>News letter</span>
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

const formmikApp = withFormik({
    mapPropsToValues({ email, password, newsletter, plan }) {
        return {
            email: email || '',
            password: password || '',
            newsletter: newsletter || true,
            plan: plan || 'free'
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Entered email is not valid. Please enter the valid email.').required('Email is required.'),
        password: Yup.string().min(9, 'Password has to be atleast 9 charactor long.').required('Password is required.')
    }),
    handleSubmit(values) {
        console.log(values)
    }
})(formikForm)

export default formmikApp

