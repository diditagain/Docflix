import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button, Container, Row, Col } from "react-bootstrap";

function Player() {
  const videourl = "https://www.youtube.com/watch?v=lfOgm1IcBd0";

  const [playValue, setPlayValue] = useState(true);
  const [playText, setPlayText] = useState("Play");

  const [playerStyle, setPlayerStyle] =  useState({
    position: "relative",
    paddingTop: "56.25%"
  });

  function changePlayValue() {
    if (playValue === true) {
      setPlayValue(false);
      setPlayText("Play");
    } else {
      setPlayValue(true);
      setPlayText("Pause");
    }
  }

  return (
    <>
      <Container>
        <Row className=" justify-content-center ">
          <Col>
            <div style={playerStyle}>
              <ReactPlayer
                url={videourl}
                playing={playValue}
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <Button variant="outline-secondary" onClick={changePlayValue}>
                {playText}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Player;
