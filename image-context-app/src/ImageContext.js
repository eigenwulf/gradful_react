// src/ImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImageContext = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  return (
    <ImageContext.Provider value={{ selectedImageId, setSelectedImageId }}>
      {children}
    </ImageContext.Provider>
  );
};