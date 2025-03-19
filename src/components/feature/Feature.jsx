import React from "react";
import "./feature.css";
import rectangle from "../../assets/feature-rectangle.png";

const Feature = ({ heading, paragraph }) => {
  return (
    <>
      <h3>
        <img src={rectangle} />
        {heading}
      </h3>
      <p>{paragraph}</p>
    </>
  );
};

export default Feature;
