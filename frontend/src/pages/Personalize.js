import React from "react";

import Header from "../components/Header";
import Customize from "../components/Customize";
import Gallery from "../components/Gallery";
import { Container } from "@chakra-ui/react";

function Personalize() {
    return (
    <Container maxW='1200px'>

        <Customize />
        <Gallery />
    </Container>
    );  
    }
export default Personalize;