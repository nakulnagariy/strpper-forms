import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from '../FormComponents/textInput'
import SelectInput from '../FormComponents/select'
import RadioButtonGroup from '../FormComponents/buttons/radioButtonGroup'
import ChkboxButtonGroup from '../FormComponents/buttons/chkboxButtonGroup'
import CheckBox from '../FormComponents/CheckBox'
import Nudge from '../banners/nudge'
class UploadYourDoc extends Component {
    constructor (props) {
        super(props)

        this.state = {
            errInOwnerName: false,
            errInSelectState: false
        }

        this.handleName = this.handleName.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleName(e) {
        if (e.target.value.trim() === "") {
            this.setState({
                errInOwnerName: true
            })
        } else {
            this.setState({
                errInOwnerName: false
            })
        }
    }

    handleSelect(e) {
        if (e.target.value.trim() === "") {
            this.setState({
                errInSelectState: true
            })
        } else {
            this.setState({
                errInSelectState: false
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Nudge />
                <div className="container my-4">
                    <h1>Upload your document here!.</h1>
                    <TextInput
                        id="ownerName"
                        label="Owner Name"
                        name="owner name"
                        disabled={false}
                        touched={this.state.errInOwnerName}
                        error="Please enter your owner name"
                        placeholder="Enter your owner name"
                        maxLength={40}
                        handleChange={this.handleName}
                    />{" "}
                    <SelectInput
                        id="state"
                        label="Select state of property"
                        opts={[
                            { name: "Please make your selection", val: "" },
                            { name: "Karnataka", val: "karnataka" },
                            { name: "Delhi", val: "delhi" }]}
                        disabled={false}
                        touched={this.state.errInSelectState}
                        error="Please correct your selection"
                        handleChange={this.handleSelect}
                    />{" "}
                    <RadioButtonGroup
                        label="Radio button example"
                        opts={[
                            { name: "Uttar Pradesh", id: "b1", val: "", defaultChecked: true },
                            { name: "Karnataka", id: "b2", val: "" },
                            { name: "Delhi", id: "b3", val: "" }]}
                    />{" "}
                    <ChkboxButtonGroup
                        label="Checkbox button example"
                        opts={[
                            { name: "Uttar Pradesh", id: "b1", val: "", defaultChecked: true },
                            { name: "Karnataka", id: "b2", val: "" },
                            { name: "Delhi", id: "b3", val: "" }]}
                    />{" "}
                    <CheckBox
                        id="chkBox1"
                        label="example check box label"
                        value=""
                        touched={this.state.errInSelectState}
                        error="Please correct your selection"
                        handleChange={this.handleSelect} >
                        <p>children lorem asdasd</p>
                    </CheckBox>{" "}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(UploadYourDoc);