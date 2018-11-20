import React, { Component } from 'react'

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
    }

    handleMe(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
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
                    <input type="text" id="ownerName" name = "ownerName" onChange={this.handleMe} placeholder={this.state.ownerName}/>
                </div>
                <div className="input-group">
                    <label htmlFor="agreementDate">Agreement date:</label>
                    <input type="date" id="agreementDate" name="agreementDate" onChange={this.handleMe} placeholder={this.state.agreementDate}/>
                </div>
                <div className="input-group">
                    <label htmlFor="monthlyRent">Monthly rent:</label>
                    <input type="number" id="monthlyRent" name="monthlyRent" onChange={this.handleMe} placeholder={this.state.monthlyRent}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Step1;