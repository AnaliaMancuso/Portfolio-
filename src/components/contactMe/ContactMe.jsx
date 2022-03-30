import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import "./contactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="container-title">
        <h2 className="container__title">Contact Me</h2>
      </div>
      <div className="icons-container">
        <a
          className="contact-icon"
          href="mailto: analiamancuso@live.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdMail className="contact-icon" />
        </a>
        <a
          className="contact-icon"
          href="https://www.linkedin.com/in/analia-mancuso-negreira/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
