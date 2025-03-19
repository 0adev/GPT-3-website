import React from "react";
import "./whatgpt3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt-feature">
        <Feature
          heading="What is GPT-3"
          paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h2 className="gradient__text">
          The possibiltes are beyond your imagination
        </h2>
        <a href="#explor-the-library">Explor The Library</a>
      </div>
      <div className="gpt3__whatgpt3-container">
        <div>
          <Feature
            heading="Chatbots"
            paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div>
          <Feature
            heading="Knowledgebase"
            paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
        <div>
          <Feature
            heading="Education"
            paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
