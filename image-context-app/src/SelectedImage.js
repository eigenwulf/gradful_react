// src/SelectedImage.js
import React from 'react';
import { useImageContext } from './ImageContext';

const SelectedImage = () => {
  const { selectedImageId } = useImageContext();

  return (
    <div>
      {selectedImageId !== null ? (
        <h2>Selected Image ID: {selectedImageId}</h2>
      ) : (
        <h2>No Image Selected</h2>
      )}
    </div>
  );
};

export default SelectedImage;