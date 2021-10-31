import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-warning">Fahim's Tourism Guide</h1>
            </div>
            <div className="col-md-4 my-2">
              <h4>ACTIVITIES</h4>
              <ul className="list-unstyled">
                <li>Beach</li>
                <li>Cliff Diving</li>
                <li>Desert Safari</li>
                <li>Flying</li>
              </ul>
            </div>
            <div className="col-md-4 my-2">
              <h4>Follow us On</h4>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Fahim's Tourism Guide | © All
              rights reserved | Terms Of Service || Privacy 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
