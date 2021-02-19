import React from "react";
import { Card, Button } from "react-bootstrap";

function Recommendations({name}) {



  return (
    <>
      <a href="#">
        <Card className="border-0 " style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body style={{ backgroundColor: "#35474B", opacity: "0.9" }}>
            <Card.Title style={{ color: "#FAD643", opacity: "1" }}>
              {name}
            </Card.Title>

          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default Recommendations;
