import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "./sliderstyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSet from "../../data/documentraies.jsx"

const imgData = [
  dataSet[15].img,
  dataSet[16].img,
  dataSet[17].img,
  dataSet[18].img,
  dataSet[19].img,
  dataSet[20].img,
  dataSet[21].img,
  dataSet[22].img,
  dataSet[23].img
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
        <h2 className="mt-5">Trending Documentaries</h2>
        <hr color="white"/>
        <Slider {...settings} >
        {sliderImg}
        </Slider>
      </div>
    );
  }
}