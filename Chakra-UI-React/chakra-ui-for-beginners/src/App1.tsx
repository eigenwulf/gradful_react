import { useState } from 'react'
import {Box, Flex, Stack, HStack, Vstack, Text, Heading, Button, background} from "@chakra-ui/react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Flex justify='space-between' align='center'>
          <Box as='section' bg='green' w='120px' h='150px'>box 1</Box>
          <Box as='section' bg='blue' w='120px' h='150px'>box 2</Box>
          <Box as='section' bg='yellow' w='120px' h='150px'>box 3</Box>
          <Box as='section' bg='red' w='120px' h='150px'>box 4</Box>
        </Flex>

        <HStack spacing='8px' mt='8px'>
          <Box bg='green' w='120px' h='150px'>box 1</Box>
          <Box bg='blue' w='120px' h='150px'>box 2</Box>
          <Box bg='yellow' w='120px' h='150px'>box 3</Box>
        </HStack>
      </div>

      <div className='App'>
        <Text as='b'>Text as b: To think is to be and to be is to think</Text>
        <Heading as='h1' fontSize='16px'>Heading, 28px: To be or not to be.</Heading>
        <Box bg='beige' w='300px' h='300px' margin='auto' mt='32px'>
          <Text fontSize='32px'>Style props</Text>
          <Button mt='32px' colorScheme='blue' _hover={{background:'red'}}>Click me</Button>
        </Box>

      </div>

      </>

  )
}

export default App
