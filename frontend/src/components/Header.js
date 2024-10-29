import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import gradful_logo_temp from '../images/gradful_logo_temp.gif'
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { px } from "framer-motion";

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

        <Box  m='' borderBottom='1px' borderColor='gray.200'>
        <HStack
            mx='8'
            py={4}
            justifyContent="space-between"
            alignItems="center">
            <nav>     
                <HStack spacing={8} >
                <ChakraLink as={ReactRouterLink} to='/'width={[70, 135]} >

                    <Image src = {gradful_logo_temp}
                    alt="home"
                    // boxSize={['150px', '200px']}                    
                    // height={[42, 100]}
                    
                    />

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
    

    
