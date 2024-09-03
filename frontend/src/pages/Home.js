import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
// import Footer from "../components/Footer";

function Home() {
    return (
    <ChakraProvider>
    <div>
    <h1>Profile</h1>
    <p>
    Welcome!
    </p>
    </div>
    <LandingSection />
    </ChakraProvider>
);
}
export default Home;