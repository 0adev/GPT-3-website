import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const Features = () => {
  return (
    <div className="gpt3__features section__margin" id="features">
      <div className="gpt3__features-heading">
        <h2 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <a href="#features">Request Early Access to Get Started</a>
      </div>
      <div className="gpt3__features-container">
        <div>
          <Feature
            heading="Improving end distrusts instantly"
            paragraph="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
        </div>
        <div>
          <Feature
            heading="Become the tended active"
            paragraph="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
        </div>
        <div>
          <Feature
            heading="Message or am nothing"
            paragraph="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
        </div>
        <div>
          <Feature
            heading="Really boy law county"
            paragraph="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
