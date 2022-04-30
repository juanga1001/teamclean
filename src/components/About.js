import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/../images/team-clean-logo-horizontal.png";

function About(props) {
  return (
    <section className="About-container">
      <div className="About-navbar">
        <Link to="/" className="link-route">
          <img src={logo} alt="" className="logo-navbar" />
        </Link>
        <Link to="/" className="link-route-page">
          Return Home
        </Link>
      </div>
      <h2 className="Section-Title">ABOUT US</h2>
      <div className="About-content"></div>
    </section>
  );
}

export default About;
