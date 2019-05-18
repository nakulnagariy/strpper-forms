import React, { Component } from 'react'
// import TextInput from '../FormComponents/textInput'
// import SelectInput from '../FormComponents/select'
import CollabroteForm from './collabroteForm'


class Collabrote extends Component {
    

    render(){
        return(
            <React.Fragment>
            <div className="collabroteBg py-4">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-6 align-self-center">
                            <div className="collabroteHeading">
                                <p className="popularHeading">COLLABORATE</p>
                                <p className="stripeText"><span>WITH US</span> </p>
                            </div>
                            <div className="collabrteDes mt-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-6 align-self-center">
                            <CollabroteForm />
                        </div>

                    </div>
                </div>
            </div>
            </React.Fragment>
                    
            )
        }
}

export default Collabrote;