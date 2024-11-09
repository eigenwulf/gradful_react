import React from 'react';
import { Center, Container, Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Image, Input, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import Envelope_Traditional from '../images/envelope/Envelope_Traditional.png';

import ReactDOM from 'react-dom';
import { Formik, Form, useField, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Envelope = ()=>{
    return (
    <Box>
    <Center >
        <Box position="relative" maxWidth="800px"border='1px' m="1">
            {/* Image background */}
            <Image
            position="relative"
            // objectFit="cover"
            borderRadius="lg"
            src={ Envelope_Traditional }
            alt="Envelope"
            />
            
            {/* form */}
            <Box
            position="absolute"
            top="10%"
            left="5%"
            transform="translateX(15%)"
            boxSize="30%"
            maxWidth="600px">

            <Formik
                initialValues= {{ name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: '',}}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(70, 'Must be 70 characters or less')
                        .required('Required'),
                    street: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                    city: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                    state: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                    zip: Yup.string()
                    .max(9, 'Must be 9 characters or less')
                    .required('Required'),
                    })}
                onSubmit={ (values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                }, 400);
                    }}
            >

            <Form >
            <VStack spacing={0} align="flex-start" 
            bg="rgba(255, 255, 255, 0.8)"             
            borderRadius="md"
            boxShadow="lg">
                <FormControl id="name" isRequired  >
                    <FormLabel htmlFor="name" fontSize="xs" mb="0">name</FormLabel>
                    <Field                   
                    as={Input}
                    name="name"
                    placeholder="Enter your name"
                    size="xs"
                    fontSize="xs" 
                    />
                    <ErrorMessage name="name" component="div" className="errormessage"/>
                </FormControl>

                <FormControl id="street" isRequired>
                    <FormLabel htmlFor="street" fontSize="xs" mt='1' mb='0'>street</FormLabel>
                    <Field
                    as={Input}
                    name="street"
                    placeholder="street address"
                    size="xs"
                    fontSize="xs"
                    pt='0'
                    mt='0'
                    />
                    <ErrorMessage name="street" component="div" className="errormessage" />
                </FormControl>

                <FormControl id="city" isRequired>
                    <FormLabel htmlFor="city" fontSize="xs" mt='1' mb='0'>city</FormLabel>
                    <Field
                    as={Input}
                    name="city"
                    placeholder="city"
                    size="xs"
                    fontSize="xs"
                    pt='0'
                    mt='0'
                    />
                    <ErrorMessage name="city" component="div" className="errormessage" />
                </FormControl>

                <FormControl id="state" isRequired>
                    <FormLabel htmlFor="state" fontSize="xs" mt='1' mb='0'>state</FormLabel>
                    <Field
                    as={Input}
                    name="state"
                    placeholder="state"
                    size="xs"
                    fontSize="xs"
                    pt='0'
                    mt='0'
                    />
                    <ErrorMessage name="state" component="div" className="errormessage" />
                </FormControl>

                <FormControl id="zip" isRequired>
                    <FormLabel htmlFor="zip" fontSize="xs" mt='1' mb='0'>zip</FormLabel>
                    <Field
                    as={Input}
                    name="zip"
                    placeholder="zipcode"
                    size="xs"
                    fontSize="xs"
                    pt='0'
                    mt='0'
                    />
                    <ErrorMessage name="zip" component="div" className="errormessage" />
                </FormControl>

                <Button
                    colorScheme="teal"
                    size="xs"
                    // isLoading={isSubmitting}
                    type="submit"

                >
                    Submit
                </Button>
                </VStack>                

            </Form>
            </Formik>
            </Box>



        </Box>
    </Center>
    </Box>
    );
}

export default Envelope;