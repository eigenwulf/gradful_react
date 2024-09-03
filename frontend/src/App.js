import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import { ChakraProvider } from "@chakra-ui/react";

import './App.css';

function App() {
return (
  // <ChakraProvider>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  // </ChakraProvider>
);
}
export default App;
