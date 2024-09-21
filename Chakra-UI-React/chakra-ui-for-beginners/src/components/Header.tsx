import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react"

export function Header() {
    return(
    <Box pb='24' as='section'>
        <Box  
            color='gray.50' 
            bg='purple.600' 
            pt='70px' 
            pb='120px' 
            px='8' 
            textAlign= {['left', 'left', 'center']}
            >

            {/* <Heading fontWeight='500' fontSize='48px'> */}
            <Heading fontWeight='extrabold' fontSize={['3xl', '3xl', '5x']}>
                Simple pricing for your business
            </Heading>
            {/* <Text fontWeight='500' fontSize='20px' pt='16px'> */}
            <Text fontWeight='medium' fontSize={['lg', 'lg', '2xl']} pt='4'>
                Plans that are carefully crafted to suite your needs
            </Text>
        </Box>
    </Box>
    )
}