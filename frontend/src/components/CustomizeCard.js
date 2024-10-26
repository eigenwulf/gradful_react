import React from "react";
import { useState } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import landing_image_temp from '../images/landing_image_temp.jpg';
import { useGalleryContext } from "../store/GalleryContext";
// import vintage-paper-03 from '../images/backgrounds/vintage-paper-03.jpg';

function CustomizeCard() {
    const [show, setShow] = useState(true);
    const { selectedCard } = useGalleryContext();
    return(
        <Box height='500px' m='2' borderBottom='1px' borderColor='gray.200'
        // bgImage={vintage-paper-03}
        bgImage="url('../images/backgrounds/vintage-paper-04.jpg')"
        bgPosition="center"
        bgRepeat="repeat">
        <p>
        {(selectedCard !==null) ? (<h2> Selected Card Id: {selectedCard} </h2>)  :
        (<h2>No image selected</h2>) }
        </p>
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
}

export default CustomizeCard;