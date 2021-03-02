import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "./sliderstyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSet from "../../data/documentraies.jsx"

import {
  Route,
  BrowserRouter as Router,
  Link,
  useRouteMatch,
} from 'react-router-dom';



export default class CenterMode extends Component {


  render() {
    
    const NewArrivals = [
      1, 53, 57, 29, 24, 33, 34, 38, 31
    ]
    
    const sliderImg = dataSet.filter((item) => NewArrivals.includes(item.id)).map((item, index) => (
      <Link to={`/documentaries/${item.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <div className="container listed-docs" >
          <img src={item.img} alt="" />
          <div className="overlay"></div>
          <div className="button"><a href="#">WATCH</a></div>
        </div>
      </Link>
    ))
    
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      arrows: true,
      speed: 1000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div >
        <hr color="white" />
        <Slider {...settings} >
          {sliderImg}
        </Slider>
      </div>
    );
  }
}