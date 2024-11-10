import React from "react";
import Header from "../components/Header";
import Envelope from "../components/Envelope";
import { Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";


function Recipients() {
    return (

    <Container maxW='1200px'>

        <Header />
        <Envelope />

    </Container>

    );  
    }
export default Recipients;