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
      <Navbar.Brand className="ml-5"><span className="brand">
        Docflix 
        <i class="fas fa-film ml-2"></i>
        </span>
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-auto  fontsize">
          <Link className='nav-link mr-5' to="/home">
            <span className="txt-color">Home</span>
          </Link>
          <Link className='nav-link mr-5' to="/Categories">
          <span className="txt-color">Categories</span>
          </Link>
          <Link className='nav-link mr-5' to="/about"><span className="txt-color">About</span></Link>
          <Link className='nav-link' to="/contact"><span className="txt-color">Contact</span></Link>
        </Nav>
        <Form inline className="">
          <FormControl type="text" placeholder="I am looking for..." className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
