import React from "react";

import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { Container, Box, } from "@chakra-ui/react";

// named import in curly braces, default import has no braces

function Home() {
    return (
    <Container width={[400, 700, 1200]} maxW='1000px'>
        <Header />
        <LandingSection />
        <Gallery />
        <Footer />
    </Container>
    );  
    }
export default Home;