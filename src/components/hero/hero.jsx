import React from "react";
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Heading, Image, Card, CardHeader, CardBody, Container } from '@chakra-ui/react'
import './hero.css'
import Foto from '../../assets/img/fotomiafondorenovado.png'
import { motion } from "framer-motion"
import Flecha from '../../assets/img/flecha.png'
import Triangulo from '../../assets/img/triangulo.png'
import Circulo from '../../assets/img/circulo.png'
import { RiMedalLine } from "react-icons/ri";
import { FaAward, FaUsers, FaTrophy } from "react-icons/fa";

const Hero = () => {



    return (

        <section id="hero">
            <div className="divHero">
                <HStack justify={'center'} gap={100} marginLeft={250}>
                    <VStack justify={"space-around"} className="stackHero">
                        <Stack marginRight={125}>
                        <Text fontSize='xl' color={'#0C7FB0'}>Hello, I'm</Text>

                        </Stack>
                        <Heading size={"lg"}>Manuel Nyville</Heading>
                        <Heading fontSize='xl' color={'#0C7FB0'} >Front End Developer</Heading>
                        <Text color={'#6D7173'}>I am a Front end developer...</Text>
                        <ButtonGroup>
                            <a href="#contact">
                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>
                                    Hire me
                                </Button>
                            </a>
                            <a href="#proyectos">
                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#0C7FB0'} colorScheme='teal' variant='outline' >
                                    See Portfolio
                                </Button>

                            </a>
                        </ButtonGroup>
                    </VStack>
                    <HStack>
                        <VStack>
                        <Stack>

                            <Image src={Triangulo} w={1000} className="garabatos" marginLeft={150}/>
                        </Stack>
                            <Image src={Flecha} w={1000} className="garabatos" />

                        </VStack>
                       

                            <img src={Foto} className="fotoMia" />
                       
                        
                        <VStack>

                            <Image src={Triangulo}  w={800} className="garabatos" marginRight={250} />
                            <Image src={Circulo}  w={800} className="garabatos" marginRight={250}/>
                        </VStack>
                    </HStack>
                </HStack>
                <Stack as={motion.div} whileHover={{ color: '#0C7FB0' }} justify={"space-around"} flexDirection={"row"} width={1100} margin={"0 auto"}>
                    <Card as={motion.div} whileHover={{ scale: 1.2, color: '#0C7FB0' }} bg={'#F9F9F9'}>
                        <CardHeader>
                            <Heading size='md'> <RiMedalLine /> </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>0 Awards</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.2, color: '#0C7FB0' }} bg={'#F9F9F9'}>
                        <CardHeader>
                            <Heading size='md'>  <FaUsers /></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>10+ Clients</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.2, color: '#0C7FB0' }} bg={'#F9F9F9'}>
                        <CardHeader>
                            <Heading size='md'> <FaAward /> </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>02 Months experience</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.3, color: '#0C7FB0' }} bg={'#F9F9F9'}>
                        <CardHeader>
                            <Heading size='md'> <FaTrophy /> </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>+20 Proyects</Text>
                        </CardBody>
                    </Card>

                </Stack>

            </div>
        </section>
    )
}


export default Hero