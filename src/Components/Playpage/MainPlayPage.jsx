import React from "react";
import Player from "./Player";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function MainPlayPage() {
  
  const watchModeWidth = '8';
  

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={watchModeWidth} >
            <Player />
            <Button ></Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPlayPage;
