import { useState } from 'react'
import {Box, Flex, Stack, HStack, Vstack, Text, Heading, Button, background} from "@chakra-ui/react"
import './App.css'
import { Header } from './components/Header'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='App'>
            <Header />
            <Pricing />
            <Features />
        </div>


    )
}

export default App
