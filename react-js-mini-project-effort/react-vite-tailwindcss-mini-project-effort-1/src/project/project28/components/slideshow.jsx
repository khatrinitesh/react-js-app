import React,{useRef} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function SlideShow() {
    const carouselRef = useRef(null);
    const carouselOptions = {
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
           0: {
             items: 1,
           },
           600: {
             items: 3,
           },
           1000: {
             items: 5,
           },
        },
       };

  return (
    <div>
        <OwlCarousel ref={carouselRef} options={carouselOptions}>
        <div>
            <h4>1</h4>
        </div>
        <div>
            <h4>2</h4>
        </div>
        <div>
            <h4>3</h4>
        </div>
        <div>
            <h4>4</h4>
        </div>
        <div>
            <h4>5</h4>
        </div>
        <div>
            <h4>6</h4>
        </div>
        <div>
            <h4>7</h4>
        </div>
        <div>
            <h4>8</h4>
        </div>
        <div>
            <h4>9</h4>
        </div>
        <div>
            <h4>10</h4>
        </div>
        </OwlCarousel>
    </div>
  )
}
