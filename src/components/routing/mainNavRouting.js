import React from "react";
import { Switch, Route } from "react-router-dom";

// import Step1 from '../rentalAgreementForm/step-1';
import Step1 from '../rentalAgreementForm/firstStepWithFormik'
import Step2 from '../rentalAgreementForm/step-2';
import UploadYourDoc from '../uploadYourDoc/uploadYourDoc'
import ContextApp from '../contextApiExample/contextApp'
import Home from "../home/home";
import Charts from '../charts-graphs/charts';
// import Details from "../details/details";
import Cart from "../cart/cart";
import Products from "../products/products";
import About from '../about/about'
import { ContactUs } from "../contactus/contactus";
import Udemy from "../udemy/app"
import FormikForm from "../formikForm/form"

import PageNotFound from "../pagenotfound/pageNotFound";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/charts" component={Charts} />
      <Route path="/home" component={Home} />
      <Route path='/Step1' component={Step1} />
      <Route path='/step2' component={Step2} />
      <Route path='/upload-your-doc' component={UploadYourDoc} />
      <Route path='/ContextApp' component={ContextApp} />
      <Route path='/about' component={About} />
      {/*<Route path="/details" component={Details} />*/}
      <Route path="/cart" component={Cart} />
      <Route path="/udemy" component={Udemy} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/products" component={Products} />
      <Route path="/formik-form" component={() => <FormikForm email="nakul@ss.io" password="1234" />} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

// const Main = () => (
//   <div>
//     <Switch>
//       <Route path="/udemy" component={Udemy} />
//     </Switch>
//   </div>
// );

export default Main;
