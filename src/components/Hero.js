import React from "react";

import QuoteForm from "./QuoteForm"

function Hero(props) {
  return (
    <section className="Hero-container">
      <img
        src="https://i.postimg.cc/VLTF7Q2V/team-clean-man-cleaning.png"
        alt="team-clean-man-cleaning"
      ></img>
      <h1>
        TAKE BACK YOUR TIME AND <span>LET US HANDLE THE GRIME</span>
      </h1>
      <p>
        Invest your time on what’s matter to you, and let us do the dirty work. 
        <span> WE ARE YOUR TEAM.</span>
      </p>
      <div className="cta-container">
        <QuoteForm/>
      </div>
    </section>
  );
}

export default Hero;
