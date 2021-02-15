import React from "react";

import Recommendations from './Recommendations'
import Player from "./Player";
import { useState } from "react";
import { Container, Row, Col, Button, Form} from "react-bootstrap";


function MainPlayPage() {
  
  const watchModeWidth = '8';
  const watchModeClasses = 'mt-5 ml-4'

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={watchModeWidth} className={watchModeClasses}>
            <Player />
            <Form.Switch style={{ width: '10rem' }} id='darkModeSwitch'/>
          </Col>
          <Col className="mt-5 ml-0">
            <Col className="mt-3 ">
             <Recommendations />
            </Col>
            <Col className="mt-3 ">
             <Recommendations />
            </Col>
            <Col className="mt-3">
             <Recommendations />
            </Col>
            <Col className="mt-3">
             <Recommendations />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPlayPage;
