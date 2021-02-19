import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "react-slick";
import "./sliderstyle.css"
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
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>
          <div className="container listed-docs" >
            <img src="https://picsum.photos/id/237/200/100" alt="" />
            <div className="overlay"></div>
            <div className="button"><a href="#">WATCH</a></div>
          </div>

        </Slider>
      </div>
    );
  }
}