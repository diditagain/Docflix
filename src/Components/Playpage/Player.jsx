import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Button, Container, Row, Col, ButtonGroup } from "react-bootstrap";
import styles from "./playerstyle.module.css";

function Player() {
  const videourl = "https://www.youtube.com/watch?v=lfOgm1IcBd0";
  const videoName = 'Name of The Video'

  // const [playValue, setPlayValue] = useState(true);

  return (
    <>
      
            <div className={styles.playerWrapper}>
              <ReactPlayer
                className={styles.reactPlayer}
                controls={true}
                url={videourl}
                playing={true}
                width="100%"
                height="100%"
                // playing={playValue}
                // playbackRate = {playRate}
                // onEnded = {...}
              />
            </div>
            <h3>{videoName}</h3>

    </>
  );
}

export default Player;
