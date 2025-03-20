import React from "react";
import "./possibility.css";
import featureImg from "../../assets/feature-image.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__margin" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={featureImg} alt="Feature Image" />
      </div>
      <div className="gpt3__possibility-content">
        <span>Request Early Access to Get Started</span>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#possibility">Request Early Access to Get Started</a>
      </div>
    </div>
  );
};

export default Possibility;
