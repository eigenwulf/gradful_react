import React from "react";
import { useState } from "react";
import { Avatar, Center, Container, Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, ListItem, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";

import { useGalleryContext } from "../store/GalleryContext";
import Card_Example_blank from '../images/Card_Example_blank.png';

const EditableText = ({ text, onTextChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(text);

    const handleTextClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setTempText(e.target.value);
    };

    const handleBlur = () => {
        onTextChange(tempText);
        setIsEditing(false);
    };

    return (
        <VStack position="relative">
            {isEditing ? (
                <Input
                    value={tempText}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autofocus
                    zIndex={1}
                />
            ) : (
                <>
                    <Text 
                        fontSize="lg"
                        padding="1"
                        borderRadius="md"
                        cursor="pointer"
                        onClick={handleTextClick}
                    >
                        {text}
                    </Text>

                </>
            )

            }
        </VStack>
    );
};


function CustomizeCard() {
    const [texts, setTexts] = useState([
        'Editable Text 1',
        'Editable Text 2',
        'Editable Text 3',
        'Editable Text 4',
    ]);

    const handleTextChange = (index, newText) => {
        const updatedTexts = [...texts];
        updatedTexts[index] = newText;
        setTexts(updatedTexts);
    };

    return (
    <Box position='relative' height={[100, 600]} border='1px' p='1' m='1'>
        <Center boxSize='100%'>
            <Image
                borderRadius='lg'
                src={Card_Example_blank}
                alt='Card'
            />
        </Center>
        <VStack position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} spacing={4}>
        {texts.map((text, index) => (
            <EditableText
                key={index}
                text={text}
                onTextChange={(newText) => handleTextChange(index, newText)}
            />
            ))
        }
        </VStack>
    </Box>
    );
};

export default CustomizeCard;




// function CustomizeCard() {

//     const { selectedCard } = useGalleryContext();

//     const [text, setText] = useState('Click to edit this text');

//     const handleBlur = () => {
//     setIsEditing(false);
//     };


//     return(
//         <>
// <SimpleGrid  height={[100, 600 ]} columns={[1, 2]} spacing={0} mx='2'>
// 	<Box position='relative' border='1px' p='1' m='1'>
// 	<Center boxSize='100%'>
// 		<Image
// 			borderRadius='lg'
// 			src={Card_Example_blank}
// 			alt='Card'/>
//         {isEditing ? (
//             <Input 
//                 value={text}
//                 onChange={handleInputChange}
//                 onBlur={handleBlur}
//                 position='absolute'
//                 top='50%'
//                 left='50%'
//                 transform="translate(-50%, -50%)"
//                 zIndex={1}
//                 />
//         ) : (
//             <VStack position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1}>
//                 <Text 
//                 onClick={handleTextClick} 
//                 cursor="pointer"
//                 fontSize="lg" 
//                 padding="2" 
//                 borderRadius="md">
//                     {text}
//                 </Text>
//             </VStack>
//         )
    
//     }


// 	</Center>
// 	</Box>
// 	{/* as prop: gives the chakra component the property of the 'as' HTML tag */}

// 	<Box border='1px' p='1' m='1'>
// 		<Center boxWidth='100%' pt='3em'>
// 		<Image
// 			width='100%'
// 			borderRadius='lg'
// 			// objectFit='cover'

// 			alt='Landing'/>
// 		</Center>
// 	</Box>
// </SimpleGrid>

//     <Box height='200px' m='2' borderBottom='1px' borderColor='gray.200'
//         // bgImage={vintage-paper-03}
//         bgImage="url('../images/backgrounds/vintage-paper-04.jpg')"
//         bgPosition="center"
//         bgRepeat="repeat">

//         <Center>
//             <Button 
//             colorScheme='purple' 
//             size={['sm','md']} 
//             w='100px' 
//             mt='1em' />

//         </Center>
//     </Box>
//     <p>
//         {(selectedCard !==null) ? (<h2> Selected Card Id: {selectedCard} </h2>)  :
//         (<h2>No image selected</h2>) }
//         </p>
//     </>
//     );
// }
