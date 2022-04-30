import React from "react";

import Form from "./Form"

function Contact() {
   
    return (
      <section className="Contact-container">
        <div className="Contact-info">
          <h1>DO YOU HAVE ANY QUESTION OR SOMETHING TO SAY TO US</h1>
          <p>We love to know what you think, feel free to talk to us if you have any questions or have any suggestions.</p>
        </div>
        <div className="Contact-form">
          <Form/>
        </div>
      </section>
    );
  }
  
  export default Contact;