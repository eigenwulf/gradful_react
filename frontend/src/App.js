import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Footer from ""components/Footer";

function App() {
  return (
  <ChakraProvider>    
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
    <p>hi</p>
  </ChakraProvider>
  );
  }

export default App;