import React, { Component } from "react";
import SwiggySlider from "../FormComponents/swiggySlider/SwiggySlider"

export default class Products extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container my-4">
          <h1>Products</h1>
          
        </div>
        <SwiggySlider/>
      </React.Fragment>
    );
  }
}
