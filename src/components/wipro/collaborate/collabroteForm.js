import React, { Component } from 'react'
import TextInput from '../FormComponents/textInput'
import SelectInput from '../FormComponents/select'

class CollabroteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : false,
            errInSelectState: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value)
    }
    
    render() {
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-6 align-self-center">
                        <TextInput 
                            id = "Name"
                            label = "NAME"
                            name = "Name"
                            disabled = { false }
                            touched = { this.state.name }
                            error = "Please enter your owner name"
                            placeholder = "Name"
                            maxLength = {40}
                            handleChange = {this.handleChange}
                        />{" "}
                        <TextInput 
                            id = "Phone"
                            label = "PHONE"
                            name = "Phone"
                            disabled = { false }
                            touched = { this.state.name }
                            error = "Please enter your phone"
                            placeholder = "Phone"
                            maxLength = {40}
                            handleChange = {this.handleChange}
                        />{" "}
                        <SelectInput 
                            id = "Experince"
                            label = "EXPERIENCE"
                            opts = {[
                                { name: "Select", val: "" }, 
                                { name: "0", val: "0" }, 
                                { name: "1", val: "1" }]}
                            disabled = { false }
                            touched = { this.state.errInSelectState }
                            error = "Please correct your selection"
                            handleChange = {this.handleChange}
                        />{" "}
                    </div>
                    <div className="col-6 align-self-center">
                        <TextInput 
                            id = "SURNAME"
                            label = "SURNAME"
                            name = "SURNAME"
                            disabled = { false }
                            touched = { this.state.name }
                            error = "Please enter your owner name"
                            placeholder = "SURNAME"
                            maxLength = {40}
                            handleChange = {this.handleChange}
                        />{" "}
                        <TextInput 
                            id = "EMAIL"
                            label = "EMAIL ADDRESS"
                            name = "EMAIL"
                            disabled = { false }
                            touched = { this.state.name }
                            error = "Please enter your phone"
                            placeholder = "EMAIL"
                            maxLength = {40}
                            handleChange = {this.handleChange}
                        />{" "}
                        <SelectInput 
                            id = "abtus"
                            label = "WHERE DID YOU HEAR ABOUT US?"
                            opts = {[
                                { name: "Select", val: "" }, 
                                { name: "0", val: "0" }, 
                                { name: "1", val: "1" }]}
                            disabled = { false }
                            touched = { this.state.errInSelectState }
                            error = "Please correct your selection"
                            handleChange = {this.handleChange}
                        />{" "}
                    </div>
                </div>
                <div className="text-right mt-4">
                    <button className="btn btn-fancy bg-black"><strong>SEND</strong></button>
                </div>
            </React.Fragment>
        )
    }
}

export default CollabroteForm;