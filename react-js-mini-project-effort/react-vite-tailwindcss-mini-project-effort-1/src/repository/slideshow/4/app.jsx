import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CustomApp() {
  //   var sliderSettings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //   };

  //   var avatarCards = [
  //     {
  //       id: 1,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       alt: "Image 1",
  //       title: "Lamborghini Huracan Performante",
  //     },
  //     {
  //       id: 2,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  //       alt: "Image 2 ",
  //       title: "Porsche 911 Turbo S",
  //     },
  //     {
  //       id: 3,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //       alt: "Image 3",
  //       title: "Ford Mustang",
  //     },
  //     {
  //       id: 4,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
  //       alt: "Image 4",
  //       title: "Lamborghini Aventador SV",
  //     },
  //     {
  //       id: 5,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //       alt: "Image 5",
  //       title: "Ferrari 458 Speciale",
  //     },
  //     {
  //       id: 6,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  //       alt: "Image 6",
  //       title: "Porsche 911",
  //     },
  //     {
  //       id: 7,
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
  //       alt: "Image 7",
  //       title: "Dodge Challenger",
  //     },
  //     {
  //       id: 8,
  //       imageSrc:
  //         "https://i.pinimg.com/750x/88/33/1b/88331be20045f95b28e91e21fa663ad0.jpg",
  //       alt: "Image 8",
  //       title: "Lamborghini Gallardo",
  //     },
  //     {
  //       id: 9,
  //       imageSrc:
  //         "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
  //       alt: "Image 9",
  //       title: "2021 Mercedes-AMG GLE53 Coupe electrifies",
  //     },
  //   ];

  //   return (
  //     <>
  //       <Slider {...sliderSettings}>
  //         {avatarCards.map((customer) => {
  //           console.log(customer);
  //           return (
  //             <div key={customer.id}>
  //               <img
  //                 alt={customer.title}
  //                 src={customer.imageSrc}
  //                 width="100%"
  //                 height="100%"
  //               />
  //             </div>
  //           );
  //         })}
  //       </Slider>
  //     </>
  //   );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}
