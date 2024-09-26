import React from "react";

import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import Footer from "../components/Footer";
import { Container, Box, } from "@chakra-ui/react";

function Home() {
    return (
    <Container width={[400, 700, 1200]} maxW='1000px'>
        <Header />
        <LandingSection />
        <Footer />
    </Container>
    );  
    }
export default Home;