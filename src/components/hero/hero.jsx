import React from "react";
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Heading} from '@chakra-ui/react'
import './hero.css'
import Foto from '../../assets/img/Retrato.png'
const Hero = () =>{


    return(
        <>
            <div>
                <HStack>
                    <VStack justify={"space-around"}>
                    <Text>Hello, I'm</Text>
                    <Heading>Manuel Nyville</Heading>
                    <h3>Front End Developer</h3>
                    <Text>I am a Front end developer...</Text>
                    </VStack>

                </HStack>

            </div>
        </>
    )
}
export default Hero