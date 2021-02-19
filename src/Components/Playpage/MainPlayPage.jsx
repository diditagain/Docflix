import { React, useState } from "react";

import Recommendations from "./Recommendations";
import Player from "./Player";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import CommentSection from "./CommentSection";

function MainPlayPage() {
  const [watchMode, setWatchMode] = useState({
    width: 8,
    classes: "mt-5 ml-4",
  });

  // const darkModeSwitch = () => {
  //   if (checked === true) {
  //     setWatchMode = {
  //       width: 12,
  //       classes: "mt-4 ml-2"

  //     }
  //   }
  // }

  const name = 'videoName'

  const recs = [
    {
    id: 1,
    name: {name},
    toLink: '',
   }, 
    {
    id: 2,
    name: {name},
    toLink: '',
   }, 
    {
    id: 3,
    name: {name},
    toLink: '',
   }, 
]

  return (
    <div>
      <Container fluid className="ml-5">
        <Row>
          <Col md={watchMode.width} className={watchMode.classes}>
            <Row>
              <Col>
                <Player />
                <Col>
                  <Form.Switch id="darkModeSwitch" />
                </Col>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <CommentSection />
              </Col>
            </Row>
          </Col>
          <Col
            style={{ margin: "0px 25px" }}
            className="mt-4 ml-5 justify-content-center"
          >
            <Col className="mt-3 ">
              <Recommendations name={name} />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPlayPage;
