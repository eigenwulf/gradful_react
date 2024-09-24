import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import gradful_logo_temp from '../images/gradful_logo_temp.gif'
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

const Header = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        // <Box
        //     transitionProperty="transform"
        //     transitionDuration=".3s"
        //     transitionTimingFunction="ease-in-out"
        //     backgroundColor="#FFFFFF"
        //     >
        <Box maxWidth="1280px" margin="0 auto" borderBottom='1px' borderColor='gray.200'>
        <HStack
            py={4}
            justifyContent="space-between"
            alignItems="center">
            <nav>     
                <HStack spacing={8} >
                <ChakraLink as={ReactRouterLink} to='/'>
                    <img src = {gradful_logo_temp}
                    alt="home"
                    height={42}
                    width={135} />
                </ChakraLink>
                    <Link to="/personalize" ><Text className="nav-item" margin='auto' fontSize='s'>personalize</Text></Link>
                </HStack>
            </nav>
            <nav>
                <HStack spacing={8} fontSize='s'>
                    <a href="#projects" className="nav-item" onClick={handleClick("about")}>about</a>
                    <a href="login" className="nav-item" onClick={null}>login</a>
                    <a href="Signup" className="nav-item" onClick={null}>signup</a>
                </HStack>
            </nav>

        </HStack>
        </Box>
        // </Box>
        );
    };
    export default Header;
    
