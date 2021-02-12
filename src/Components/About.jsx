import React from 'react';
import "../App.css"
import {Container , Row , Col} from "react-bootstrap"

function About() {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                <h1>About This Project</h1>
                </Row>
                <Row className="mt-2">
                <h3>Purpose :</h3>
                 </Row>

                <div className="col-sm-6 fontArrange">
                    <p>This work is the final task of Kodluyoruz.org
                         Adana Full Stack Web Development Bootcamp training. 
                         The aim of this project is to develop an application by 
                         using the tools we learned during the training effectively.
                     </p>

                </div>

                <Row className="mt-2">
                <h3>What is used for this project ?</h3>
                 </Row>

                 <div className="col-sm-6 fs-4">
                    <ul>
                        <li>ReactJS</li>
                        <li>React-router-dom</li>
                        <li>React-bootstrap</li>
                        <li>Bootstrap</li>
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