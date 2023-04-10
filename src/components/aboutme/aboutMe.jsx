import './aboutMe.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading } from '@chakra-ui/react'
import { motion } from "framer-motion"

const About = () =>{

    return(
        <>
            <Container marginTop={10}>
                <HStack>
                    <img src="" alt="" />
                    <VStack>
                        <Heading>About me</Heading>
                        <Heading fontSize='lg' color={'#6D7173'}> <strong>02 Months experience in Front end developing</strong></Heading>
                        <Text color={'#6D7173'}>Hello, I'am a Front end developer, my name is Manuel Nyville Vito. I am an experte in creating Web pages. I make pages really simple to use from complicated ideas.</Text>
                    </VStack>
                </HStack>
            </Container>
        </>
    )
}
export default About