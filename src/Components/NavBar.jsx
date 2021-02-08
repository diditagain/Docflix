import React from "react";
import "../index.css"
import "../App.css"
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand><span className="brand">Docflix</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-auto">
          <Link className='nav-link' to="/home">
            <span className="txt-color">Home</span>
          </Link>
          <Link className='nav-link' to="/Categories">
          <span className="txt-color">Categories</span>
          </Link>
          <Nav.Link href="#link"><span className="txt-color">About</span></Nav.Link>
          <Nav.Link href="#link"><span className="txt-color">Contact</span></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
