import React from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import landing_image_temp from '../images/landing_image_temp.jpg';

const LandingSection = () => (
<SimpleGrid  columns={[1, 2]} spacing={1} m='2'>
<Box bg='tomato' height={[20, 400 ]}>
	<Heading 
	as='h5' 
	size='xs' 
	textAlign={[ 'left', 'center' ]}
	mt={['2em', '8em']}
	
	>Send Graduation Announcements in the Mail for Free</Heading>
</Box>
<Box bg='tomato' height='400px'>

	<Center boxWidth='100%' pt='3em'>
	<Image
        width='100%'
        borderRadius='lg'
        // objectFit='cover'
        src={landing_image_temp}
        alt='Landing'/>
    </Center>
</Box>
</SimpleGrid>

);


export default LandingSection;

// <Button colorScheme='purple' size={['sm','md']} w='100px' mt='1em' >Get Started</Button>
// <Grid
// h='450px'
// // templateRows='420px 10px'
// gridTemplateRows={{
//     base: "auto",
//     md: "420px 10px"
// }}
// templateColumns='repeat(4, 1fr)'
// gap={1} 
// >
// {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
// <Flex direction={['row', 'row', 'row']}>

// <GridItem colSpan={2} bg='papayawhip'>
//     <Image
//     width={{ md: 300 }}
//     // boxSize='100%'
//     borderRadius='lg'
//     // objectFit='cover'
//     src={landing_image_temp}
//     alt='Dan Abramov'
//     />
// </GridItem>

// <GridItem colSpan={2} bg='papayawhip'> </GridItem>

// <GridItem colSpan={4} bg='tomato' height={10}>
// {/* text-align `left` on all viewports and `center` from the first breakpoint and up */}
// <Center boxSize='100%' >
//     <Heading as='h5' size='xs' textAlign={[ 'left', 'center' ]}>Send Graduation Announcements in the Mail for Free</Heading>
// </Center>

// </GridItem>
// </Flex>
// </Grid>
