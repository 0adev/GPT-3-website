import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__margin">
      <img src={google} alt="google logo" id="google" />
      <img src={slack} alt="slack logo" id="slack" />
      <img src={atlassian} alt="atlassian logo" id="atlassian" />
      <img src={dropbox} alt="dropbox logo" id="dropbox" />
      <img src={shopify} alt="shopify logo" id="shopify" />
    </div>
  );
};

export default Brand;
