import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import card_background from '../images/CardEnvelopeYellowBack.png'

const greeting = "Hello, I am graduating!";
const bio1 = "Graduation Announcements";
const bio2 = "with special deals";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365">
        <span>LandingSection</span>  
        <img src = {card_background}
            alt="moi"
            height={50}
            width={150} />
        <p>{greeting}</p>
        <Heading>{bio1}</Heading>
        <Text>{bio2}</Text>
    </FullScreenSection>
);

export default LandingSection;
