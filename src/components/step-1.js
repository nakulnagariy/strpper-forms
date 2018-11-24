import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitStep1 } from '../actions/action';
import PropTypes from 'prop-types';


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
        return (
            <React.Fragment>
                <div className="input-group">
                    <label htmlFor="ownerTitle">Title:</label>
                    <select name="ownerTitle" id="ownerTitle" onChange={this.handleMe}>
                        <option value="mr" >Mr</option>
                        <option value="ms">Ms</option>
                        <option value="mrs">Mrs</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="ownerName">Name:</label>
                    <input type="text" id="ownerName" name = "ownerName" onChange={this.handleMe}/>
                </div>
                <div className="input-group">
                    <label htmlFor="agreementDate">Agreement date:</label>
                    <input type="date" id="agreementDate" name="agreementDate" onChange={this.handleMe}/>
                </div>
                <div className="input-group">
                    <label htmlFor="monthlyRent">Monthly rent:</label>
                    <input type="number" id="monthlyRent" name="monthlyRent" onChange={this.handleMe}/>
                </div>

                <div className="input-group">
                    <input type="button" id="submitStep1" name="submitStep1" value = "Submit" onClick={this.saveStep1}/>
                </div>

            </React.Fragment>
        )
    }
}

Step1.propTypes = {
    submitStep1: PropTypes.func.isRequired
}


export default connect(null, { submitStep1 })(Step1)