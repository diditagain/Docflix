import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "./sliderstyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSet from "../../data/documentraies.jsx"

const imgData = [
  dataSet[1].img,
  dataSet[2].img,
  dataSet[3].img,
  dataSet[4].img,
  dataSet[5].img,
  dataSet[6].img,
  dataSet[7].img,
  dataSet[8].img,
  dataSet[9].img
] 
const sliderImg = imgData.map((item,index) => (
  <div className="container listed-docs" >
            <img src={item} alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
))
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
        {sliderImg}
        </Slider>
      </div>
    );
  }
}