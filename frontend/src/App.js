import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Personalize from "./pages/Personalize";



function App() {
  return (
  <ChakraProvider>    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personalize" element={<Personalize />} />
    </Routes>

  </ChakraProvider>
  );
  }

export default App;