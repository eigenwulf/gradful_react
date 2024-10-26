// src/ImageGallery.js
import React from 'react';
import { useImageContext } from './ImageContext';
import SelectedImage from './SelectedImage';

const images = [
  { id: 1, src: 'https://via.placeholder.com/150?text=Image+1' },
  { id: 2, src: 'https://via.placeholder.com/150?text=Image+2' },
  { id: 3, src: 'https://via.placeholder.com/150?text=Image+3' },
];

const ImageGallery = () => {
  const { setSelectedImageId } = useImageContext();

  const handleClick = (id) => {
    console.log (setSelectedImageId)
    setSelectedImageId(id);
  };

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          onClick={() => handleClick(image.id)}
          style={{ cursor: 'pointer', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;