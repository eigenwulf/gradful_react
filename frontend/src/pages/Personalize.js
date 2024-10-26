import React from "react";

import Header from "../components/Header";
import CustomizeCard from "../components/CustomizeCard";
import { Container } from "@chakra-ui/react";

function Personalize() {

    return (

    <Container maxW='1200px'>

        <Header />
        <CustomizeCard />

    </Container>


    );  
    }
export default Personalize;