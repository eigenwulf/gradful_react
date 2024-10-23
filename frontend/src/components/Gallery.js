import React from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import card_placeholder from '../images/card_placeholder.png';


const Gallery = () => {
    const handleClick = event => {
        // 👇️ Refers to the image element    
        console.log('Image clicked');
        
    };
return(
    <Box>

    <Box bg='#CCD9BA' p='2px' fontSize='16px' border='1px'>
        <Text textAlign='center' fontSize={['s', 's', 'l']}>
        Stationary Styles
        </Text>
    </Box>

    <SimpleGrid  columns={[2, 4]} spacing={1} m='2' border='1px' borderColor='gray.200'> 
        <box border='1px'>
            <Image
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



{/* 
// <Box bg='#CCD9BA' m='2'>
// 	<Box margin='auto' overflow='hidden' boxShadow=''>        
//             <Flex direction={['column', 'row', 'row']}>
//                 <Box  p='10px' border='1px'>
//                     <Text fontSize='18px' fontWeight='800'>Premium Pro</Text>
//                     <Heading as='h3' fontSize={['xl', '2xl', '3xl']}>$329</Heading>
//                     <Text color="#171923" fontSize='18px' fontWeight='500'>billed just once</Text>
//                     <Image
//         width={[200, 400, 700 ]}
//         borderRadius='lg'
//         // objectFit='cover'
//         src={landing_image_temp}
//         alt='Landing'/>
//                 </Box>
//                 <Box bg='#CCD9BA' p='60px' fontSize='16px' border='1px'>
//                     <Text textAlign='left' fontSize={['s', 's', 'l']}>
//                         Access these features when you get this pricing package.
//                     </Text>
//                 </Box>
//             </Flex>
//     </Box>    
// </Box> 
*/}
