import React, { useContext } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import { useGalleryContext } from '../store/GalleryContext.js';

import card_pic from '../images/gallery/card_placeholder.png';

const cards = [
    { id: 1, src: '../images/gallery/card_placeholder.png', card_style: "special card 1" },
    { id: 2, src: '../images/gallery/card_placeholder.png', card_style: "special card 2" },
    { id: 3, src: '../images/gallery/card_placeholder.png', card_style: "special card 3" },
    { id: 4, src: '../images/gallery/card_placeholder.png', card_style: "special card 4" },
    { id: 5, src: '../images/gallery/card_placeholder.png', card_style: "special card 1" },
    { id: 6, src: '../images/gallery/card_placeholder.png', card_style: "special card 1" },
    { id: 7, src: '../images/gallery/card_placeholder.png', card_style: "special card 1" },
    { id: 8, src: '../images/gallery/card_placeholder.png', card_style: "special card 1" },
    ];

function Gallery () {
    const { selectedCard, setSelectedCard } = useGalleryContext();
    // same as: const setSelectedCard=useGalleryContext().setSelectedCard;

    const handleClick = (src) => {
        setSelectedCard(src);
    };

    return(
        <Box mt='1'>

        <Box bg='#CCD9BA' p='2px' fontSize='16px' mt='1px' border='1px'>
            <Text textAlign='center' fontSize={['s', 's', 'l']}>
            Stationary Styles
            </Text>
        </Box>

        <SimpleGrid  columns={[2, 4]} spacing={1} m='' border='1px' borderColor='gray.200'> 
        
            {cards.map((card) => (
            <Box>
            <Image
            key={card.id}
            // src = "../images/gallery/card_placeholder.png"
            src="../images/gallery/card_placeholder.png"
            alt={`Image ${card.card_style}`}
            // onClick={() => {setSelectedCard(image.id);} }
            onClick={() => handleClick(card.src)}
            style={{ margin: '6px' }}
            />
            <Text textAlign='center'>{card.card_style}</Text>
            </Box>
            )) }
        
        </SimpleGrid>
        </Box>
        );
};

export default Gallery;
