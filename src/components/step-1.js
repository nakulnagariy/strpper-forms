import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitStep1 } from '../actions/action';
import PropTypes from 'prop-types';
import SearchAppBar from './material-ui-components/nav-bar';
import  TextFieldMargins  from './material-ui-components/input'

import { InputLabel, MenuItem, Select, Button   } from '@material-ui/core';

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
        const { classes } = this.props;

        return (
            <React.Fragment>
            <SearchAppBar />
                <div style={{marginTop:30, marginLeft:30}}>
                    <div direction="column" className="input-group">
                        <Select
                            value={this.state.ownerTitle}
                            onChange={this.handleMe}
                            inputProps={{
                            name: 'ownerTitle',
                            id: 'ownerTitle',
                            }}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value="mr">Mr</MenuItem>
                            <MenuItem value="ms">Ms</MenuItem>
                            <MenuItem value="mrs">Mrs</MenuItem>
                        </Select>
                    </div>
                    <div direction="column" className="input-group">                 
                        <TextFieldMargins id="ownerName" label = "Name" name = "ownerName" defaultValue = "" onChange={this.handleMe}/>
                    </div>
                    <div  direction="column" className="input-group">
                        <TextFieldMargins type="date" label = "Agreement date:" id="agreementDate" name="agreementDate" onChange={this.handleMe}/>
                    </div>
                    <div  direction="column" className="input-group">
                        <TextFieldMargins type="number" label = "Monthly rent:" id="monthlyRent" name="monthlyRent" onChange={this.handleMe}/>
                    </div>
                    <div direction="column" className="input-group">
                        <Button variant="contained" color="secondary" type="button" id="submitStep1" name="submitStep1" value = "Submit" onClick={this.saveStep1}>Submit</Button>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

Step1.propTypes = {
    submitStep1: PropTypes.func.isRequired
}


export default connect(null, { submitStep1 })(Step1)