import React from "react";
import "./footer.css";
import logo from "../../assets/GPT-3.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-header">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-container section__padding">
        <div className="gpt3__footer-container_logo">
          <img src={logo} alt="gpt3 logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-container_links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#footer">Overons</a>
            </li>
            <li>
              <a href="#footer">Social Media</a>
            </li>
            <li>
              <a href="#footer">Counters</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__footer-container_company">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#footer">Terms & Conditions</a>
            </li>
            <li>
              <a href="#footer">Privacy Policy</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__footer-container_getintouch">
          <h3>Get in touch</h3>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
