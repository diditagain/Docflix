import React, { Component } from "react";
import {Row , Col} from "react-bootstrap"
import Slider from "react-slick";
import "./carouselstyle.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: false


    };
    return (
      <div className="container mt-3" >

        <Slider {...settings} >
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
            </div>
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}