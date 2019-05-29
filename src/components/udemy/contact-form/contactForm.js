import React, { Component } from 'react';
import Input from '../../UI/input/input';
import Spinner from '../../UI/spinner/spinner';

class ContactForm extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                displayLabel: 'Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                displayLabel: 'Street name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your street address'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: 'input',
                displayLabel: 'Zipcode',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter your zipcode'
                },
                value: '',
                validation: {
                    required: true,
                    minlength: 5,
                    maxlength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                displayLabel: 'Country',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                displayLabel: 'Email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                displayLabel: 'Delivery method',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: 'fastest',
                valid: true,
                validation: {
                    required: false,
                }
            },
            checkBoxBtnGrp: {
                elementType: 'checkboxBtnGrp',
                displayLabel: 'Checkbox button grp',
                elementConfig: {
                    options: [
                        { id: "f1", value: 'fastest', displayValue: 'Fastest', defaultChecked: true },
                        { id: "c1", value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: 'fastest',
                valid: true,
                validation: {
                    required: true,
                }
            },
            checkBox: {
                elementType: 'checkbox',
                displayLabel: 'Checkbox',
                elementConfig: {
                    options: [
                        { id: "f11", value: 'fastest', displayValue: (<p>Fastest</p>), defaultChecked: true },
                        { id: "c11", value: 'cheapest', displayValue: (<p>Cheapest</p>) },
                    ]
                },
                value: 'fastest',
                valid: true,
                validation: {
                    required: true,
                }
            }
        },
        formIsValid: false,
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: false })
    }

    handleChange = (e, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        console.log(updatedFormElement);
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        console.log(formData);
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minlength) {
            isValid = value.length >= rules.minlength && isValid;
        }

        if (rules.maxlength) {
            isValid = value.length <= rules.maxlength && isValid;
        }

        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement) =>
                    <Input
                        key={formElement.id}
                        label={formElement.config.displayLabel}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        validType={formElement.id}
                        change={(e) => this.handleChange(e, formElement.id)}
                    />
                )}
                <button className="btn btn-primary" disabled={!this.state.formIsValid}>Order</button>
            </form>
        )

        if (this.state.loading) {
            form = <Spinner />
        }

        // if (this.state.formIsValid) {
        //     form = (<h1>Thank you!</h1>)
        // }




        return (
            <div>
                <h1>Contact Form</h1>
                {form}
            </div>
        );
    }
}

export default ContactForm;