import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "./sliderstyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSet from "../../data/documentraies.jsx"

export default class CenterMode extends Component {
  render() {
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
        <h2 className="mt-5">Top Rated</h2>
        <hr color="white"/>
        <Slider {...settings} >
        <div className="container listed-docs" >
            <img src={dataSet[1].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[2].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[3].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[4].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[5].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[6].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[7].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[8].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src={dataSet[9].img} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
        </Slider>
      </div>
    );
  }
}