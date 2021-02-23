import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "./sliderstyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSet from "../../data/documentraies.jsx"

const imgData = [
  dataSet[0].img,
  dataSet[52].img,
  dataSet[56].img,
  dataSet[28].img,
  dataSet[23].img,
  dataSet[32].img,
  dataSet[33].img,
  dataSet[37].img,
  dataSet[30].img
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
        <h2 className="mt-5">Jump Into New Arrivals</h2>
        <hr color="white" />
        <Slider {...settings} >
          {sliderImg}

        </Slider>
      </div>
    );
  }
}