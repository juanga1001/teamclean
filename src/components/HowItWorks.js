import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import dataStep from "../data/HIW-Steps";
import dataQuote from "../data/HIW-Quotes";

function HowItWorks(props) {
  const [step, setStep] = useState("1");
  const [quote, setQuote] = useState(0);

  function HandleSteps(props) {
    setStep(props.target.innerHTML);
  }

  const Steper = () => {
    return (
      <ul className="HIW-Stepper">
        <li
          onClick={HandleSteps}
          key="1"
          className={step >= "1" ? "Stepper-Active" : ""}
        >
          1
        </li>
        <li className={`HIW-Line ${step >= "2" ? "Stepper-Active" : ""}`}></li>
        <li
          onClick={HandleSteps}
          key="2"
          className={step >= "2" ? "Stepper-Active" : ""}
        >
          2
        </li>
        <li className={`HIW-Line ${step >= "3" ? "Stepper-Active" : ""}`}></li>
        <li
          onClick={HandleSteps}
          key="3"
          className={step >= "3" ? "Stepper-Active" : ""}
        >
          3
        </li>
        <li className={`HIW-Line ${step >= "4" ? "Stepper-Active" : ""}`}></li>
        <li
          onClick={HandleSteps}
          key="4"
          className={step >= "4" ? "Stepper-Active" : ""}
        >
          4
        </li>
      </ul>
    );
  };

  const handleBackward = () => {
    switch (quote) {
      case 0:
        setQuote(dataQuote.length - 1);
        break;
      default:
        setQuote(quote - 1);
    }
  };

  const handleForward = () => {
    console.log(quote);
    switch (quote) {
      case dataQuote.length - 1:
        setQuote(0);
        break;
      default:
        setQuote(quote + 1);
    }
  };

  const Cards = () => {
    return (
      <div className="HIW-Card-Container">
        <div className="HIW-Card-header"></div>
        {dataStep[step - 1].icon}
        <h2>{dataStep[step - 1].title}</h2>
        <p>{dataStep[step - 1].description}</p>
      </div>
    );
  };

  return (
    <section className="HowItWorks-container">
      <h2 className="Section-Title">HOW IT WORKS</h2>
      <div className="HowItWorks-content">
        {Steper()}
        {Cards()}
        <div className="HIW-info">
          <div className="HIW-social-proof">
            <ArrowBackIosIcon
              onClick={handleBackward}
              className="HIW-row-left"
            />
            <ArrowForwardIosIcon
              onClick={handleForward}
              className="HIW-row-right"
            />
            <h3>{dataQuote[quote].quote}</h3>
            <p>{dataQuote[quote].autor}</p>
          </div>
          <img
            src="https://images.pexels.com/photos/3681787/pexels-photo-3681787.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="team clean comercial service"
          ></img>
          <h1>
            RELIEVE YOUR STRESS AND <span>LET US HANDLE THE MESS</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
