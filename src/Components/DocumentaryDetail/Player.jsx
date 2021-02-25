import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";


function DocumentaryDetailPlayer(props) {

    return(<div>
        <ReactPlayer
        controls={true}
        url={props.item.url}
      />
      </div>);
}

export default DocumentaryDetailPlayer;