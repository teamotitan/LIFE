import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="footer-left">
          <h2>Project LIFE</h2>
          <p>
            Project LIFE was a project created by Roydon and Timothy. They are
            both university students who have issues with productivity.
            Since having the motivation to study was an issue to them, they thought,
            why not create one website that will keep them accountable and boost
            their productivity? Hence the birth of Project LIFE. We hope you
            enjoy using this website!
          </p>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+65 12345678</li>
            <li>life@life.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 LIFE Inc. All rights reserved</p>
      <p>
        Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map{" "}
      </p>
    </div>
  );
};

export default Footer;
