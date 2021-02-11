import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button, Container, Row, Col, ButtonGroup } from "react-bootstrap";

function Player() {
  const videourl = "https://www.youtube.com/watch?v=lfOgm1IcBd0";

  const [playValue, setPlayValue] = useState(true);
  const [playText, setPlayText] = useState("Play");
  const [playRate, setPlayRate ] = useState(1);

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
                playbackRate = {playRate}
              />
            </div>
            <div>
              <Button variant="secondary" onClick={changePlayValue}>
                {playText}
              </Button>
              <ButtonGroup className="ml-3">
              <Button 
              variant="secondary" 
              onClick={() => setPlayRate(1)}>{1}</ Button>
              <Button 
              variant="secondary" 
              onClick={() => setPlayRate(1.25)}>{1.25}</ Button>
              <Button 
              variant="secondary" 
              onClick={() => setPlayRate(1.50)}>{1.50}</ Button>
              <Button 
              variant="secondary" 
              onClick={() => setPlayRate(1.75)}>{1.75}</ Button>
              <Button 
              variant="secondary" 
              onClick={() => setPlayRate(2)}>{2}</ Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Player;
