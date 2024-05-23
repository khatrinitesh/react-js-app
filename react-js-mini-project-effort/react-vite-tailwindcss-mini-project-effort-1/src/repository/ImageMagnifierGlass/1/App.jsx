import React from 'react';
import {
    Magnifier,
    GlassMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

const ImageMagnifierGlassApp = () => {
  return (
    <>
      <ImageMangifierGlass/>
    </>
  )
}

export default ImageMagnifierGlassApp


const ImageMangifierGlass = () => {
    return(
        <>
        <GlassMagnifier
                imageSrc="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph"
                imageAlt="Example"
                largeImageSrc="./large-image.jpg" // Optional
                />

                <Magnifier
                imageSrc="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=sph"
                imageAlt="Example"
                largeImageSrc="./large-image.jpg" // Optional
                mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                />
        </>
    )
}

