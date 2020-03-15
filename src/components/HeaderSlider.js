import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import slide1 from '../assets/images/slide-1.jpg'
import slide2 from '../assets/images/slide-2.jpg'
import slide3 from '../assets/images/slide-3.jpg'

export class HeaderSlider extends Component {
  render() {
    var settings = {
      arrows: false,
      dots: true,
      autoplay: 3000,
      fade: true
    };

    return (
      <Slider {...settings}>
        <SlideItem img={slide1} />
        <SlideItem img={slide2} />
        <SlideItem img={slide3} />
      </Slider>
    );
  }
}

const SlideItem = styled.div`
  height: 100vh;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`