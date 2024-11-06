import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Personalize from "./pages/Personalize";
import Recipients from "./pages/Recipients";
import { GalleryProvider } from './store/GalleryContext.js'

function App() {
  return (
  <ChakraProvider>
  <GalleryProvider>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personalize" element={<Personalize />} />
      <Route path="/recipients" element={<Recipients />} />
    </Routes>

  </GalleryProvider>
  </ChakraProvider>
  );
  }

export default App;