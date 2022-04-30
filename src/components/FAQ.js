import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import data from "../data/FAQ";

function FAQ() {
  const questions = data.map((item) => {
    return (
      <Accordion id={item.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={item.id*10}
        >
          <h4>{item.question}</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            {item.answer}
          </p>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <div className="FAQ-container">
      <h2 className="Section-Title">FAQ</h2>
      <div className="FAQ-content">
          <div className="FAQ-questions"> {questions}</div>
          <div className="FAQ-quote">
            <h1>SIMPLE <br></br> SAFE GUARANTEED</h1>
          </div>
      </div>
    </div>
  );
}

export default FAQ;
