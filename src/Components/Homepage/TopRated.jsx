import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "../../App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
          <div className="listed-docs">
          <img src="https://picsum.photos/id/239/200/100" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}