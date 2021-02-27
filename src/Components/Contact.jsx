import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./contact.css"
import {useTranslation} from "react-i18next";
import IMGOZGE from "./ozge.jpeg"
import IMGHASAN from "./hasan.png"

import { Container, Row, Image } from "react-bootstrap"


function Contact() {
    const {t} = useTranslation();
    return (
        <>
            <Container>
                <div className="row mt-5 ">
                    <h1>{t("Contact.1")}</h1>
                </div>
                <hr color="white"/>
                <div className="row mt-5 ">
                    <div className="d-flex flex-column justify-content-center col-sm-4 ">
                        <Image className="contact-images" fluid  src={IMGOZGE} ></Image>
                        <div className="d-flex flex-column mt-3">
                            <h4>Özge BOĞA</h4>
                            <p className="list-unstyled">Electrical Electronics Engineering</p>
                            <ul className="list-unstyled">
                                <li>
                                    <i class="fas fa-envelope mr-2"></i>
                                    <a href="mailto:ozgeboga01@gmail.com" className="text-white">
                                        OZGEBOGA01@GMAIL.COM
                                 </a>
                                </li>
                                <li><i class="fab fa-linkedin mr-2"></i>
                                    <a href="https://www.linkedin.com/in/ozgeboga11" className="text-white">
                                        Özge Boğa
                                 </a>
                                </li>
                                <li><i class="fab fa-github mr-2"></i>
                                    <a href="https://github.com/Ozgeboga" className="text-white">
                                        Ozgeboga
                                 </a>
                                </li>
                                <li></li>

                            </ul>
                        </div>
                    </div>
                     <div className="col-sm">

                     </div>

                    <div className="d-flex flex-column justify-content-center col-sm-4 ">
                    <Image className="contact-images" fluid  src={IMGHASAN} ></Image>
                        <div className="d-flex flex-column mt-3">
                            <h4>Özge BOĞA</h4>
                            <p className="list-unstyled">Computer Engineer</p>
                            <ul className="list-unstyled">
                                <li>
                                    <i class="fas fa-envelope mr-2"></i>
                                    <a href="mailto:ozgeboga01@gmail.com" className="text-white">
                                    HSN.OZDMR.1997@GMAIL.COM
                                 </a>
                                </li>
                                <li><i class="fab fa-linkedin mr-2"></i>
                                    <a href="https://www.linkedin.com/in/hasan-%C3%B6zdemir-176609191/" className="text-white">
                                        HASAN ÖZDEMİR
                                 </a>
                                </li>
                                <li><i class="fab fa-github mr-2"></i>
                                    <a href="https://github.com/Synthesizer-source" className="text-white">
                                    Synthesizer-source
                                 </a>
                                </li>
                                <li></li>

                            </ul>
                        </div>
                    </div>


                </div>

            
            </Container>

        </>
    );
}

export default Contact;