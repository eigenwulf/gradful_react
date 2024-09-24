import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
    ];


    function Footer() {
        return (

        <HStack 
        px={16}
        py={4}
        // justifyContent="space-between"
        alignItems="center">
        
        spacing={8}>
            <a href="https://github.com" className="nav-item">
            <FontAwesomeIcon icon={faGithub} size="2x"/> </a>
            <a href="https://www.linkedin.com" className="nav-item">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/> </a>
        </HStack>
        )
    };

export default Footer;