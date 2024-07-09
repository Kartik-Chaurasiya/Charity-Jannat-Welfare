import React from 'react';
import { images as IMAGES } from '../assets/Image'; // Adjust the path if needed
import '../styles/ImageGallery.css'; // Ensure your styles are imported

const ImageGallery = () => {
  return (
    <div id="Services" className="gallery-container">
      <div className="gallery">
        {IMAGES.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.caption} className="gallery-image" loading="lazy" />
            <div className="overlay">
              <div className="caption">{image.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;


