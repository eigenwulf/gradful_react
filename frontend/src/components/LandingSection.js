import React from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, Image, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import landing_image_temp from '../images/landing_image_temp.jpg';

const LandingSection = () => (
<SimpleGrid columns={[1, 2]} spacing={10}>
<Box bg='tomato' height='80px'></Box>
<Box bg='tomato' height='80px'></Box>

</SimpleGrid>

);

export default LandingSection;




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
