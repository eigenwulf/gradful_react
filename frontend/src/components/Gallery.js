import React, { useContext } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import card_placeholder from '../images/card_placeholder.png';

import { useGalleryContext } from '../store/GalleryContext.js';

const cards = [
    { id: 1, src: {card_placeholder}, card_style: "special card 1" },
    { id: 2, src: '../images/card_placeholder.png', card_style: "special card 1" },
    { id: 3, src: '../images/card_placeholder.png', card_style: "special card 1" },
    { id: 4, src: '../images/card_placeholder.png', card_style: "special card 1" },
    { id: 5, src: '../images/card_placeholder.png', card_style: "special card 1" },
    { id: 6, src: '../images/card_placeholder.png', card_style: "special card 1" },
    { id: 7, src: '../images/card_placeholder.png', card_style: "special card 1" },
    { id: 8, src: '../images/card_placeholder.png', card_style: "special card 1" },
    ];

function Gallery () {
    const { selectedCard, setSelectedCard } = useGalleryContext();
    // same as: const setSelectedCard=useGalleryContext().setSelectedCard;

    const handleClick = (id) => {
        setSelectedCard(id);
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
            src={card_placeholder}
            alt={`Image ${card.card_style}`}
            // onClick={() => {setSelectedCard(image.id);} }
            onClick={() => handleClick(card.id)}
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
