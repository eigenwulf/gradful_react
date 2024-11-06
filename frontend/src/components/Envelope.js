import React from "react";
import { Center, Container, Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Image, Input, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
// import Card_Example_blank from '../images/gallery/Card_Example_blank.png';
import Envelope_Traditional from '../images/envelope/Envelope_Traditional.png';

const Envelope = ()=>{
    return (
        <Box>
            <Box position="relative" maxWidth="700px"border='1px' m="1">
                    {/* Image background */}
                    <Center >
                        <Image
                            // boxSize={ ["md", "lg", 'xl'] }
                            // size={ ["sm", "50px"]}
                            position="relative"
                            objectFit="cover"
                            maxHeight="500px"

                            borderRadius="lg"
                            src={ Envelope_Traditional }
                            alt="Envelope"
                        />
                    
                    {/* form box */}
                    <Box
                        position="absolute"
                        top="10%"
                        left="5%"
                        transform="translateX(15%)"
                        bg="rgba(255, 255, 255, 0.8)"
                        borderRadius="md"
                        boxShadow="lg"
                        boxSize="30%"
                        width={["30%", "30%"]}
                        maxWidth="400px">


                            <formControl mb="1" boxSize="30%">
                                <FormLabel htmlFor="name" fontSize="sm">name</FormLabel>
                                <Input id="name" placeholder="Enter your name"  fontSize="sm"
                                px={1}
                                py={1}
                                width={["80%", "70%", "60%"]}
                                />



                            </formControl>
                            <formControl mb="1">
                                <FormLabel htmlFor="name" fontSize="sm">address</FormLabel>
                                <Input id="address" placeholder="address" fontSize="sm" 
                                    px={1}
                                    py={1}
                                    width={["80%", "70%", "60%"]}/>
                            </formControl>
                            <Button colorScheme="blue">Submit</Button>

                    </Box>
                    </Center>
            <VStack>




            </VStack>
        </Box>

        </Box>
    );
}

export default Envelope;