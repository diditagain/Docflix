import React from "react";
import "../App.css"
import { useTranslation } from "react-i18next";
import i18next from "../i18next";
import IMGBRAND from "./docflix.png"
import { Link } from "react-router-dom";
import Search from "../Components/Search/Search"
import {
  Navbar,
  Nav,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function NavBar() {

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <>

      <Navbar className="navbar-height mb-5" bg="dark" expand="lg">
        <Navbar.Brand className="">
          <Link to="/home">
            <Image className="" src={IMGBRAND} style={{width:"100px",}}></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
          <Row>
            <Col>
              
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mx-auto fontsize fill">
                  <Link className='nav-link  text-white navbar-home' to="/home">
                    {t("Navbar.1")}
                  </Link>
                  <Link className='nav-link  text-white' to="/Categories">
                    {t("Navbar.2")}
                  </Link>
                  <Link className='nav-link  text-white' to="/about">
                    {t("Navbar.3")}
                  </Link>
                  <Link className='nav-link text-white' to="/contact">
                    {t("Navbar.4")}
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>

        <Container className="d-flex flex-row-reverse">
          <Row>
            <Col><Search /></Col>
            <Col>
              <button onClick={() => handleClick("en")} className="translation-button mr-1">EN</button>
              <button onClick={() => handleClick("tr")} className="translation-button">TR</button>
            </Col>
          </Row>


        </Container>

      </Navbar>


    </>
  );
}

export default NavBar;
