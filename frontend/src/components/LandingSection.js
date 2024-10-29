import React from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import landing from '../images/backgrounds/landing.png';

const LandingSection = () => (

// breakpoints 
// base: 0em, 0px, sm: 30em, 480px, md: 48em, 768px, xl: 80em, 1280px */}

<Box mb=''>
<Box bg='#CCD9BA' height={ [20, 20]} m='' border='1px'> 
	<Center>
	<Heading 
		as='h5' 
		size={['xs','s']}
		color='#443428' 
		textAlign='center'
		pt='1em'
		>Send Graduation Announcements in the Mail for Free</Heading> 
		</Center>
</Box>
	
<Box bg='#CCD9BA' height={[20, 310 ]} mb=''>
<Center boxWidth='100%'>
	<Image
		width='100%'
		borderRadius=''
		// objectFit='cover'
		src={landing}
		alt='Landing'/>
	</Center>
</Box>
<Box height={[20, 50 ]} m='' border='1px' bg='white'>
<Center>
	<Heading 
		as='h7' 
		size={['xs','xs']}
		color='#443428' 
		textAlign='center'
		pt='1em'
		>You personalize online. We print and mail with a packet of special offers, all for free. Send it online too.</Heading> 
		</Center>
</Box>


</Box>
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
