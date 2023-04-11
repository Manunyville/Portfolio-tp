import './aboutMe.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Fotaki from '../../assets/img/fotoabout.png'

const About = () =>{

    return(
        <Container width={1200}>
            <HStack marginTop={10}>
                
                    <Stack>

                    <Image src={Fotaki} alt="" className='fotoAbout'width={400} height={200} />
                    </Stack>
                    <VStack>
                        <Heading>About me</Heading>
                        <Heading fontSize='lg' color={'#6D7173'}> <strong>02 Months experience in Front end developing</strong></Heading>
                        <Text color={'#6D7173'}>Hello, I'am a Front end developer, my name is Manuel Nyville Vito. I am an experte in creating Web pages. I make pages really simple to use from complicated ideas.</Text>
                    </VStack>
                
            </HStack>
        </Container>
    )
}
export default About