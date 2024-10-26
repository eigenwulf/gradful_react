// src/App.js
import React from 'react';
import { ImageProvider } from './ImageContext';
import ImageGallery from './ImageGallery';
import SelectedImage from './SelectedImage';

const App = () => {
  return (
    <ImageProvider>
      <div>
        <h1>Image Selector</h1>
        <ImageGallery />
        <SelectedImage />
      </div>
    </ImageProvider>
  );
};

export default App;
