import React from 'react'

const ImgGalleryHorizontalScrollApp = () => {
    const imageUrls = [
        'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph', 
        'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg', 
        'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg']; 
        // Replace with your image URLs
  return (
    <>
      <HorizontalImageGallery images={imageUrls}/>
    </>
  )
}

export default ImgGalleryHorizontalScrollApp

const HorizontalImageGallery = ({images}) => {
    return(
        <>
        <div className="horizontal-gallery">
            <div className="image-list">
                {images.map((imageUrl,index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index + 1}`}/>
                ))}
            </div>
        </div>
        </>
    )
}
