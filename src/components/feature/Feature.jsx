import React from "react";
import "./feature.css";

const Feature = ({ rectangle, heading, paragraph }) => {
  return (
    <>
      <h1>
        <img src={rectangle} />
        {heading}
      </h1>
      <p>{paragraph}</p>
    </>
  );
};

export default Feature;
