import React from "react";

import Header from "../components/Header";
import CustomizeCard from "../components/CustomizeCard";
import Gallery from "../components/Gallery";
import { Container } from "@chakra-ui/react";

function Personalize() {
    return (
    <Container maxW='1200px'>
        <Header />
        <CustomizeCard />
        <Gallery />
    </Container>
    );  
    }
export default Personalize;