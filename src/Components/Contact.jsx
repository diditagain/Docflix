import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./contact.css"
import IMGOZGE from "./ozge.jpeg"

import { Container, Row, Image } from "react-bootstrap"


function Contact() {
    return (
        <>
            <Container>
                <div className="row mt-5 ">
                    <h1>CONTACT WITH DEVELOPERS</h1>
                </div>
                <hr color="white"/>
                <div className="row mt-5 ">
                    <div className="d-flex flex-column justify-content-center col-sm-4 ">
                        <Image className="contact-images" fluid  src={IMGOZGE} ></Image>
                        <div className="d-flex flex-column mt-3">
                            <h4>Özge BOĞA</h4>
                            <p className="list-unstyled">Junior Frontend Developer</p>
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
                        <Image fluid  src={IMGOZGE} ></Image>
                        <div className="d-flex flex-column mt-3">
                            <h4>Özge BOĞA</h4>
                            <p className="list-unstyled">Junior Frontend Developer</p>
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


                </div>

                <div className="row d-flex flex-colum justify-content-center">
                    <div className="col-sm-4">
                    <Image fluid  src={IMGOZGE} ></Image>
                        <div className="d-flex flex-column mt-3">
                            <h4>Özge BOĞA</h4>
                            <p className="list-unstyled">Junior Frontend Developer</p>
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

                </div>
            </Container>

        </>
    );
}

export default Contact;