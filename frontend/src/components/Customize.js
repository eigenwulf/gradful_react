import React from "react";
import { useState } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import landing_image_temp from '../images/landing_image_temp.jpg';
// import vintage-paper-03 from '../images/backgrounds/vintage-paper-03.jpg';

const [show, setShow] = useState(true);
const Customize = () => (
    <Box height='500px' m='2'
        // bgImage={vintage-paper-03}
        bgImage="url('../images/backgrounds/vintage-paper-03.jpg')"
        bgPosition="center"
        bgRepeat="repeat">

        <Center boxWidth='100%' 
        pt='3em'>
            <Image
                width='40%'
                borderRadius='lg'
                // objectFit='cover'
                src={landing_image_temp}
                alt='Landing'/>
        </Center>

        <Center>
            <Button 
            colorScheme='purple' 
            size={['sm','md']} 
            w='100px' 
            mt='1em' 
            onClick={() => setShow(!show)}>
            Customize</Button>
            {show ? <Box h='50px' border='1px'/> : null}

        </Center>
    </Box>
);

export default Customize;