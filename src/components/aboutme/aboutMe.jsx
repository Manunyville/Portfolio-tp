import './aboutMe.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Fotaki from '../../assets/img/Fotoportfolio.png'

const About = () =>{

    return(
        <Stack id='about' width={'full'} bg={'#F9F9F9'}>
            <HStack width={1200} marginTop={10} justify={'space-around'} gap={110}>
                
                    <HStack marginLeft={220}>

                    <Image src={Fotaki} width={450} height={400} className='fotoAbout' />
                    </HStack>
                    <VStack >
                        <Stack>
                        <Heading>About me</Heading>
                        <Heading size='lg' color={'#6D7173'}> 02 Meses de experiencia en desarrolo Front end</Heading>
                        <Text color={'#6D7173'}>Hola, yo soy Manuel, un desarrollador Front end, me encargo del desarrollo de paginas web y aplicaciones web de acuerdo a lo que el cliente proponga. Transformo ideas complicadas en proyecto faciles de usar. </Text>

                        </Stack>
                    </VStack>
                
            </HStack>
        </Stack>
    )
}
export default About