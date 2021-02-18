import React from "react";
import { Card, Button } from "react-bootstrap";

function Recommendations() {
  return (
    <>
      <a href="#">
        <Card className="border-0 " style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body style={{ backgroundColor: "#35474B", opacity: "0.9" }}>
            <Card.Title style={{ color: "#FAD643", opacity: "1" }}>
              Card Title
            </Card.Title>
            <Card.Text style={{ color: "#FAD643", opacity: "1" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default Recommendations;
