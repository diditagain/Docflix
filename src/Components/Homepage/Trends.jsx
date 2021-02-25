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

    const Trends = [
      19, 17, 18, 19, 20, 21, 22, 23
     
    ]
    
    const sliderImg1 = dataSet.filter((item) => Trends.includes(item.id)).map((item, index) => (
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
      slidesToShow: 3,
      arrows : true,
      speed: 1000
    };
    return (
      <div className="container">
        
        <hr color="white"/>
        <Slider {...settings} >
        {sliderImg1}
        </Slider>
      </div>
    );
  }
}