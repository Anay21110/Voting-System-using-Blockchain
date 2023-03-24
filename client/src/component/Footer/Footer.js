import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Marathwada Mitra Mandal College of Engineering{" "}
          <a
            className="profile"
            href="https://mmcoe.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mmcoe.edu.in
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href="https://github.com/Anay21110"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anay Dongre
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
