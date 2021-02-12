import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

import {Container} from "react-bootstrap"

function Footer() {
  return (
    <>
      <div className="mt-5 pt-5 pb-5 footer ">
        <Container>
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>DocFlix</h2>
              <p className="pr-5 text-white-50">
                Welcome to DocFlix, the leading source for 100% free documentary
                films. We curate the best documentary films available online for
                educational purposes as well as personal enjoyment.{" "}
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Menu</h4>
              <ul className="m-0 p-0">
                <li>
                  - <a href="#">Home</a>
                </li>
                <li>
                  - <a href="#">Categories</a>
                </li>
                <li>
                  - <a href="#">Contact</a>
                </li>

                <li>
                  - <a href="#">About</a>
                </li>
                <li>
                  - <a href="#">Terms of Services</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Stay Connected</h4>
              <p classNameName="pr-5 text-white-50">
                22, Lorem ipsum dolor, consectetur adipiscing
              </p>
              <p>
                <a >
                  <i className="fa fa-facebook-square fa-sm mr-1" />
                </a>
                <a >
                  <i className="fa fa-linkedin-square fa-md ms-2" />
                </a>
              </p>

              <p>
                <i className="fa fa-envelope-o me-3" />
                info@DocFlix.com
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2021. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
          </Container>
      </div>
    </>
  );
}

export default Footer;
