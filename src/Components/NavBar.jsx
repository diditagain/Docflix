import React from "react";
import "../App.css"
import IMGBRAND from "./docflix.png"
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Form,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

function NavBar() {
  return (
    <>
      
        <Navbar className="navbar-height" bg="dark" expand="lg">
          <Navbar.Brand className="navbar-brand">
            <Link to="/home">
            <Image fluid className="img-height" src={IMGBRAND}></Image>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Nav className="mr-auto mx-auto  fontsize">
              <Link className='nav-link  text-white navbar-home' to="/home">
                Home
          </Link>
              <Link className='nav-link  text-white' to="/Categories">
                Categories
          </Link>
              <Link className='nav-link  text-white' to="/about">
                About
            </Link>
              <Link className='nav-link text-white' to="/contact">
                Contact
            </Link>
            </Nav>
            <div className="container">
              <div className="search ">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton" >
                  <i className="fa fa-search fa-md"></i>
                </button>
                
                <button className="translation-button">EN</button>
                <button className="translation-button">TR</button>
                
              </div>
            </div>
            
          </Navbar.Collapse>
        </Navbar>

     
    </>
  );
}

export default NavBar;
