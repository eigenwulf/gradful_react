import React, { ElementType } from 'react';
import { Box, HStack, Icon, Text, StackProps } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons';

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='5'>
            {/* <Icon as={icon} boxSize='40px'/> */}
            <BellIcon/>
            <Text fontSize='md' fontWeight='bold' textAlign='left'>{children} </Text>
        </HStack>

    )
}

export function Features() {
    return (
        <Box maxW='800 px' m='auto' pt='7' pb='4'>
        <HStack p='3' spacing='3'>
            <Feature>Money back guarantee</Feature>
            <Feature>No money sucka</Feature>
            <Feature>You snooze you lose</Feature>
        </HStack>
        </Box>
    )

}



