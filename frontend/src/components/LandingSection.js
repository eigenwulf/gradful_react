import React from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import { HamburgerIcon } from '@chakra-ui/icons'
import landing_image_temp from '../images/landing_image_temp.jpg';


const LandingSection = () => (
<>
<SimpleGrid height={['450px']} columns={[1, 2]} spacing={1} mb='20px'>
<Box bg='tomato' height={[20, 400 ]}>
	<Heading 
	as='h5' 
	size='xs' 
	textAlign={[ 'left', 'center' ]}
	mt={['2em', '8em']}
	
	>Send Graduation Announcements in the Mail for Free</Heading>
</Box>
<Box bg='tomato' height='400px' >

	<Center boxWidth='100%' pt='8em'>
	<Image
        width={[200, 400, 700 ]}
        borderRadius='lg'
        // objectFit='cover'
        src={landing_image_temp}
        alt='Cards'/>
    </Center>
    <Center>
    <Button colorScheme='purple' size={['sm','md']} w='100px' mt='1em' >Get Started</Button>
	</Center>
</Box>
</SimpleGrid>

<Box bg='#CCD9BA' mt='16px'>
	<Box margin='auto' overflow='hidden' boxShadow=''>        
            <Flex direction={['column', 'row', 'row']}>
                <Box  p='30px' border='1px'>
                    <Text fontSize='18px' fontWeight='800'>Premium Pro</Text>
                    <Heading as='h3' fontSize={['xl', '2xl', '3xl']}>$329</Heading>
                    <Text color="#171923" fontSize='18px' fontWeight='500'>billed just once</Text>
                    
                </Box>

                <Box bg='#CCD9BA' p='60px' fontSize='16px' border='1px'>
                    <Text textAlign='left' fontSize={['s', 's', 'l']}>
                        Access these features when you get this pricing package.
                    </Text>

                </Box>

            </Flex>
    </Box>    
</Box>
</>

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
