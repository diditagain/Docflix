import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import "../footerstyle.css";

import IMGBRAND from "./docflix.png"

import {Container , Image} from "react-bootstrap"

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-5 pt-5 pb-5 footer ">
        <Container>
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
             <div className="row">
              <Image  src={IMGBRAND} ></Image>
              </div>
              <p className="pr-5 text-white-50">
                {t("Footer.1")}
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links mt-5">
              <h4 className="mt-lg-0 mt-sm-3 ">{t("Footer.2")}</h4>
              <ul className="m-0 p-0">
                <li>
                  - <a href="#">{t("Footer.3")}</a>
                </li>
                <li>
                  - <a href="#">{t("Footer.4")}</a>
                </li>
                <li>
                  - <a href="#">{t("Footer.5")}</a>
                </li>

                <li>
                  - <a href="#">{t("Footer.6")}</a>
                </li>
                <li>
                  - <a href="#">{t("Footer.7")}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location mt-5">
              <h4 className="mt-lg-0 mt-sm-4">{t("Footer.8")}</h4>
              <p classNameName="pr-5 text-white-50">
              {t("Footer.9")}
              </p>
              <p >
                <a href="#">
                  <i className="fa fa-facebook-square fa-lg mr-1 footer-icons" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin-square fa-lg ms-2 footer-icons" />
                </a>
              </p>

              <p>
                <i className="fa fa-envelope-o me-3 footer-icons mr-1" />
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
