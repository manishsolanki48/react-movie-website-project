import React, { Component } from "react";
import Slider from "react-slick";
import image1 from './images/banner-image1.jpg';
import image2 from './images/banner-image2.jpg';
import image3 from './images/banner-image3.jpg';
import image4 from './images/banner-image4.jpg';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="image1">
            <img src={image1}/>
          </div>
          <div className="image1">
            <img src={image2}/>
          </div>
          <div className="image1">
            <img src={image3}/>
          </div>
          <div className="image1">
            <img src={image4}/>
          </div>
        </Slider>
      </div>
    );
  }
}