import React from "react";
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Heading, Image} from '@chakra-ui/react'
import './hero.css'
import Foto from '../../assets/img/retrato.jpeg'
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
                    <ButtonGroup>
                        <Button  color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>Hire me</Button>
                        <Button color={'#0C7FB0'} colorScheme='teal' variant='outline' >See Portfolio</Button>
                    </ButtonGroup>
                    </VStack>
                   <img src={Foto}className="fotoMia" />                
                </HStack>

            </div>
        </>
    )
}
export default Hero