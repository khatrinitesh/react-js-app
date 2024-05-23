import React,{useState} from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImageZoomApp = () => {
  return (
    <>
      <MyImg />
    </>
  )
}

export default ImageZoomApp

const MyImg = () => (
    <Zoom>
      <img
        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph"
        width="500"
      />
    </Zoom>
  )