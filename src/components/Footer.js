import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <section className="Footer-container">
      <div className="Footer-content">
        <img
          src="https://i.postimg.cc/rsZs3bc2/team-clean-logo-horizontal-footer.png"
          alt="team clean logo one color"
        />

        <ul className="Footer-Navbar">
          <li onClick={() => props.handleScroll("Navbar")}>Home</li>
          <li onClick={() => props.handleScroll("Services-container")}>
            Services
          </li>
          <li onClick={() => props.handleScroll("HowItWorks-container")}>
            How It Works
          </li>
          <li onClick={() => props.handleScroll("FAQ-container")}>FAQ</li>
        </ul>

        <ul className="Footer-Navbar">
          <li>
            <Link to="/about" className="link-route">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link-route">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <p>
        Copyright © 2022 Team Clean. All rights reserved | Terms of Service |
        Privacy Policy
      </p>
    </section>
  );
}

export default Footer;
