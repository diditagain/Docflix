import React, { Component } from "react";
import Slider from "react-slick";
import "../../style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

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
      arrows : false
      
     
    };
    return (
      <div className="container-carousel">
        
        <Slider {...settings} >
          <div>
            <img src="https://picsum.photos/id/237/600/300" alt=""/>
          </div>
          <div>
          <img src="https://picsum.photos/id/237/600/300" alt=""/>
          </div>
          <div>
          <img src="https://picsum.photos/id/237/600/300" alt=""/>
          </div>
          <div>
          <img src="https://picsum.photos/id/237/600/300" alt=""/>
          </div>
          <div>
          <img src="https://picsum.photos/id/237/600/300" alt=""/>
          </div>
          <div>
          <img src="https://picsum.photos/id/237/600/300" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}