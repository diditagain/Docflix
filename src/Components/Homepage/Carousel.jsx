import React, { Component } from "react";
import {Row , Col} from "react-bootstrap"
import Slider from "react-slick";
import "./carouselstyle.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dataSet from "../../data/documentraies.jsx"
import {
  Route,
  BrowserRouter as Router,
  Link,
  useRouteMatch,
} from 'react-router-dom';

export default class PauseOnHover extends Component {
  render() {

    const Carousel = [
      61,62
    ]

    const sliderImg = dataSet.filter((item) => Carousel.includes(item.id)).map((item, index) => (
      <Link to={`/documentaries/${item.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <div className="container listed-docs" >
          <img className="text-center" src={item.img} style={{height: "350px" , width: "1000px"  }} alt="" />
          {/* <div className="overlay"></div>
          <div className="button"><a href="#">WATCH</a></div> */}
        </div>
      </Link>
    ))
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      arrows: false


    };
    return (
      <div className="container mt-3" >

        <Slider {...settings} >
          {sliderImg}
        </Slider>
      </div>
    );
  }
}