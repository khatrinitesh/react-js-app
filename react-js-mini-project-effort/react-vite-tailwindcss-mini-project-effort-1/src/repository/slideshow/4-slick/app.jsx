import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom.css';

export default function CustomApp() {
    const settings = {
        dots: true,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:false,
        centerPadding:'10px'
    };

    const item = {
        backgroundColor:'teal',
        padding:'10px',
    }

    const container = {
        maxWidth:'900px',
        margin:'auto',
    }

  return (
    <>
    <div style={container}>
       <Slider {...settings}>
            <div className="item">
                <h3>Slide 1</h3>
            </div>
            <div className="item">
                <h3>Slide 2</h3>
            </div>
            <div className="item">
                <h3>Slide 3</h3>
            </div>
            <div className="item">
                <h3>Slide 1</h3>
            </div>
            <div className="item">
                <h3>Slide 2</h3>
            </div>
            <div className="item">
                <h3>Slide 3</h3>
            </div>
            <div className="item">
                <h3>Slide 1</h3>
            </div>
            <div className="item">
                <h3>Slide 2</h3>
            </div>
            <div className="item">
                <h3>Slide 3</h3>
            </div>
        </Slider>
        </div>
    </>
  )
}
