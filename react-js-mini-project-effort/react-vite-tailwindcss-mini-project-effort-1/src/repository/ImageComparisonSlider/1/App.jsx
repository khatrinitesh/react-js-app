import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const ImageComparisonSliderAPp = () => {
  return (
    <>
      <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph" srcSet="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph" alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph" srcSet="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph" alt="Image two" />}
    />
    </>
  )
}

export default ImageComparisonSliderAPp

