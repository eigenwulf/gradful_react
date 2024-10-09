import { Box, 
        Button, 
        Heading, 
        HStack, 
        Icon,
        Text, 
        Flex, 
        Stack, 
    } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons';
import React from 'react'
import { CheckIcon } from '../icons/Icon';

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest} alignItems='start'>
            <Icon as={CheckIcon} w='22px' h='22px'/>
            <Text textAlign={['left', 'left', 'center']} fontSize={['xs', 'xs', 's']} >{children}</Text>
        </HStack>
    )
}

export function Pricing() {
    return (
    <Box m='4'>
        <Box maxW='500px' margin='auto' mt='-200' borderRadius='12px' overflow='hidden' boxShadow=''>
            <Flex direction={['column', 'column', 'row']}>
                <Box bg='#F0EAFB' p='30px'>
                    <Text fontSize='18px' fontWeight='800'>Premium Pro</Text>
                    <Heading as='h3' fontSize={['xl', '2xl', '3xl']}>$329</Heading>
                    <Text color="#171923" fontSize='18px' fontWeight='500'>billed just once</Text>
                    <Button colorScheme='purple' size='lg' w='200px' mt='24px'>Get Started</Button>
                </Box>

                <Box p='60px' fontSize='16px' bg='white'>
                    <Text textAlign='left' fontSize={['s', 's', 'l']}>
                        Access these features when you get this pricing package.
                    </Text>
                    <Stack as='ul' spacing='20px' pt='4'>
                        <ListItem>International calling</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages</ListItem>
                        <ListItem>Messaging API</ListItem>
                        <HStack><PhoneIcon/><Text>icon</Text></HStack>
                        
                    </Stack>
                </Box>

            </Flex>
        </Box>
    </Box>
    )
}