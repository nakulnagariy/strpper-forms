import React, { Component } from 'react'

class Step1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "mr",
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        console.log(e.target.value)
    }



    render () {
        return (
            <React.Fragment>
                <div className="input-group">
                    <label htmlFor="owner-title">Title:</label>
                    <select name="owner-title" id="owner-title" onChange={this.handleSelect}>
                        <option value="mr" >Mr</option>
                        <option value="ms">Ms</option>
                        <option value="mrs">Mrs</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }
}

export default Step1;