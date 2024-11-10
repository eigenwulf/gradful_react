import React from 'react';
import { Center, Container, Box, Button, Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Image, Input, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import Envelope_Traditional from '../images/envelope/Envelope_Traditional.png';
import Stats from '../components/Stats.js';
import UserForm from '../components/UserForm.js';

import { useState } from 'react';
// import { useForm } from 'react-hook-form';

const Envelope = ()=>{
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const [data, setData] = useState();
    // // const onSubmit = data => console.log(data);
    // const onSubmit = (data) => {
    //     setData(data);
    // };
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
                alt="Envelope"/>
                
                {/* form */}
                <Box
                position="absolute"
                top="10%"
                left="5%"
                transform="translateX(15%)"
                boxSize="30%"
                maxWidth="600px">

                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                        <input type="text" name="First Name" placeholder="Name" {...register("firstname")} />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>  */}
                <UserForm />
                </Box>
                {/* {data && (
                <Stats
                    Firstname={data.firstname}
                    Lastname={data.lastname}
                    Password={data.password}
                /> )} */}

            </Box>
        </Center>
        </Box>
    );
}

export default Envelope;