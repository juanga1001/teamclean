import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import data from "../data/Services";

function Services(props) {
  const cards = data.map((item) => {
    return (
      <Card key={item.id} className="Services-Card" sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={item.alt}
          height="200"
          image={item.image}
        />
        <CardContent>
          <h3
            style={{ margin: "10px 20px", fontSize: "1rem", color: "#2D2D2D" }}
          >
            {item.title}
          </h3>
          <p
            style={{
              margin: "10px 20px",
              fontSize: "0.9rem",
              color: "#2D2D2D",
            }}
          >
            {item.description}
          </p>
        </CardContent>
        <CardActions>
          <p style={{ margin: "0px 30px 30px 30px", color: "#2D2D2D" }}>
            More Info
          </p>
        </CardActions>
      </Card>
    );
  });

  return (
    <section className="Services-container">
      <h2 className="Section-Title">SERVICES</h2>
      <div className="Services-content">
        {cards}
        <div className="Services-info">
          <div>
            <h1>Why Choose Team Clean?</h1>
            <div>
              <div>
                <AccessTimeIcon />
                <p>Simple</p>
              </div>
              <div>
                <HealthAndSafetyIcon />
                <p>Safe</p>
              </div>
              <div>
                <WorkspacePremiumIcon />
                <p>Guaranteed</p>
              </div>
            </div>
          </div>
          <p>
            <span>We make it simple, safe and guaranteed.</span>
            <br />
            <br /> We believe that first impressions matter. Whether it is your
            home or business we will always pay attention to every detail making
            sure it shines to catch staff or visitors’ attention. We promise
            quality, reliable cleaning service every time. We work hard to be
            the best so that our loyal customers feel special. We are there to
            solve problems for our clients to become a long-term partner. Our
            team is licensed and insured.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
