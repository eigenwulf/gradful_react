import React from "react";
import { useState } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import { useGalleryContext } from "../store/GalleryContext";
import Card_Example_blank from '../images/Card_Example_blank.png';

function CustomizeCard() {
    const [show, setShow] = useState(true);
    const { selectedCard } = useGalleryContext();
    return(
        <>
<SimpleGrid  height={[100, 500 ]} columns={[1, 2]} spacing={0} mx='2'>
	<Box  border='1px'>
	<Center boxWidth='100%' pt='3em'>
		<Image
			width='100%'
			borderRadius='lg'
			// objectFit='cover'
			src={Card_Example_blank}
			alt='Landing'/>
	</Center>
	</Box>
	{/* as prop: gives the chakra component the property of the 'as' HTML tag */}

	<Box border='1px'>
		<Center boxWidth='100%' pt='3em'>
		<Image
			width='100%'
			borderRadius='lg'
			// objectFit='cover'

			alt='Landing'/>
		</Center>
	</Box>
</SimpleGrid>


        <Box height='500px' m='2' borderBottom='1px' borderColor='gray.200'
        // bgImage={vintage-paper-03}
        bgImage="url('../images/backgrounds/vintage-paper-04.jpg')"
        bgPosition="center"
        bgRepeat="repeat">
        <p>
        {(selectedCard !==null) ? (<h2> Selected Card Id: {selectedCard} </h2>)  :
        (<h2>No image selected</h2>) }
        </p>


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
    </>
    );
}

export default CustomizeCard;