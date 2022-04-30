import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const data = [
    {
      id: 1,
      icon: <FactCheckIcon className='HIW-Card-icon' />,
      title:
        "FILL FORM",
      description: "Fill in the form with your information and get a quote automatically.",
    },
    {
        id: 2,
        icon: <PhoneInTalkIcon className='HIW-Card-icon' />,
        title:
          "GET IN TOUCH",
        description: "We will call you to give us directions, define details and make a final agreement. If it is necessary to make any adjustments to the price, it will be right here.",
      },
      {
        id: 3,
        icon: <CleaningServicesIcon className='HIW-Card-icon' />,
        title:
          "LET US IN",
        description: "The time has come to make you happy. Let your team in so we can do the dirty work for you.",
      },
      {
        id: 4,
        icon: <ThumbUpAltIcon className='HIW-Card-icon' />,
        title:
          "FEEDBACK",
        description: "Tell us what you think of our work, there are a thousand details that can be improved every day and we love doing it for you..",
      },
  ];
  
  export default data;