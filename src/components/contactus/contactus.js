import React, { useState } from "react";
import ContactForm from '../udemy/contact-form/contactForm';
export const ContactUs = () => {
  const [contactUsState, setContactUsState] = useState({
    pageName: 'Contact Us'
  })

  const updateHooksState = () => {
    setContactUsState({
      pageName: 'Updated page name!..with Hooks'
    })
  }

  return (
    <React.Fragment>
      <div className="container my-4">
        <h1>{contactUsState.pageName}</h1>
        <button onClick={updateHooksState}>update hooks state</button>
        <p>We are using hooks here!... useState.</p>
        <ContactForm />
      </div>
    </React.Fragment>
  );
}
