import React from 'react';
import "../App.css"
import { useTranslation } from "react-i18next";
import {Container , Row , Col} from "react-bootstrap"

function About() {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
                <Row className="mt-5">
                <h1>{t("About.1")}</h1>
                </Row>
                <hr color="white"/>
                <Row className="mt-2">
                <h3>{t("About.2")}</h3>
                 </Row>

                <div className="col-sm-6 fontArrange">
                    <p>
                     </p>
                     {t("About.3")}
                </div>

                <Row className="mt-2">
                <h3>{t("About.4")}</h3>
                 </Row>

                 <div className="col-sm-6 fs-4">
                    <ul>
                        <li>ReactJS</li>
                        <li>React-router-dom</li>
                        <li>React-slick</li>
                        <li>React-bootstrap</li>
                        <li>Bootstrap</li>
                        <li>i18next</li>
                        <li>Javascript</li>
                        <li>Postman</li>
                        <li>Fontawesome icons</li>
                    </ul>

                </div>

                
            </Container>
        </div>
    );
}

export default About;