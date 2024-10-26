import React, { useContext } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import card_placeholder from '../images/card_placeholder.png';

import { useGalleryContext } from '../store/GalleryContext.js';

const images = [
    { id: 1, src: {card_placeholder} },
    { id: 2, src: '../images/card_placeholder.png' },
    { id: 3, src: '../images/card_placeholder.png' },
    ];

function Gallery () {
    const { selectedCard, setSelectedCard } = useGalleryContext();
    // same as: const setSelectedCard=useGalleryContext().setSelectedCard;

    const handleClick = (id) => {
        setSelectedCard(id);
        console.log (selectedCard);
    };

    return(
        <Box>

        <Box bg='#CCD9BA' p='2px' fontSize='16px' border='1px'>
            <Text textAlign='center' fontSize={['s', 's', 'l']}>
            Stationary Styles
            </Text>
        </Box>

        <SimpleGrid  columns={[2, 4]} spacing={1} m='2' border='1px' borderColor='gray.200'> 
        <div>
            {images.map((image) => (
            <Box border='1px'>
            <Image
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            // onClick={() => {setSelectedCard(image.id);} }
            onClick={() => handleClick(image.id)}
            style={{ margin: '10px' }}
            />
            </Box>
            ))}
        </div>
        </SimpleGrid>

        <SimpleGrid  columns={[2, 4]} spacing={1} m='2' border='1px' borderColor='gray.200'> 
            <box border='1px' >
                <Image
                key = {images.id}
                borderRadius='lg'
                src={card_placeholder}
                onClick={handleClick}
                alt='Card'/>
                <Text textAlign='center'>Special Card 1</Text>
            </box>
            <box border='1px'>
                <Image
                    borderRadius='lg'
                    // objectFit='cover'
                    src={card_placeholder}
                    alt='Card'/>
                <Text textAlign='center'>Special Card 2</Text>
            </box>
            <box border='1px'>
            <Image
                borderRadius='lg'
                src={card_placeholder}
                alt='Card'/>
                <Text textAlign='center'>Special Card 3</Text>
            </box>
            <box border='1px'>
            <Image
                borderRadius='lg'
                src={card_placeholder}
                alt='Card'/>
                <Text textAlign='center'>Special Card 4</Text>
            </box>
            <box border='1px'>
                <Image
                borderRadius='lg'
                src={card_placeholder}
                alt='Card'/>
                <Text textAlign='center'>Special Card 1</Text>
            </box>
            <box border='1px'>
                <Image
                    borderRadius='lg'
                    // objectFit='cover'
                    src={card_placeholder}
                    alt='Card'/>
                <Text textAlign='center'>Special Card 2</Text>
            </box>
            <box border='1px'>
            <Image
                borderRadius='lg'
                src={card_placeholder}
                alt='Card'/>
                <Text textAlign='center'>Special Card 3</Text>
            </box>
            <box border='1px'>
            <Image
                borderRadius='lg'
                src={card_placeholder}
                alt='Card'/>
                <Text textAlign='center'>Special Card 4</Text>
            </box>

        </SimpleGrid>
        </Box>
        );
};

export default Gallery;
