import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GallerySlider = () => {
  const images = [
    {
      original: 'casa-foto.jpeg',

    },
    // Add more images in the same format
  ];

  const galleryStyle = {
    height:'25%',
    width:'25%',
  };

  return (
    <div style={galleryStyle}>
      <ImageGallery items={images} />
    </div>
  );
};

export default GallerySlider;
