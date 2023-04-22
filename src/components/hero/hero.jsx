import React from "react";
import { Stack, HStack, VStack, Button, ButtonGroup, Text, Heading, Image, Card, CardHeader, CardBody, Container } from '@chakra-ui/react'
import './hero.css'
import Foto from '../../assets/img/fotomiafondorenovado.png'
import { motion } from "framer-motion"
import { RiMedalLine } from "react-icons/ri";
import { FaAward, FaUsers, FaTrophy } from "react-icons/fa";

const Hero = () => {



    return (

        <Container id="hero" minW={"full"} m={0}>
            <Stack gap={20} >
                <Stack
                    justifyContent={'space-around'}
                    direction={{ base: 'column', md: 'row' }}
                    textAlign={'center'}
                    alignItems={'center'}
                >
                    <VStack>
                        <Stack textAlign={{base:'center', md:'start'}}>
                            <Text fontSize='xl' color={'#0C7FB0'}>Hello, I'm</Text>
                            <Heading size={"lg"}>Manuel Nyville</Heading>
                            <Heading fontSize='xl' color={'#0C7FB0'} >Front End Developer</Heading>
                            <Text color={'#6D7173'}>I am a Front end developer...</Text>
                        </Stack>
                        <Stack direction={'row'}>
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
                        </Stack>
                    </VStack>
                    <Stack >
                        <Image
                            src={Foto}
                            width={{ md: '225px', lg: '350px' }}
                            height={{ md: '225px', lg: '350px' }} />
                    </Stack>

                </Stack>
                <Stack
                    w={'full'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Stack w={{base:'full',md:'70%'} }direction={{base:'column',md:'row'}} justifyContent={{base:'center', md:'space-between'}} alignItems={'center'}>
                        <Card as={motion.div}
                            whileHover={{ scale: 1.2, color: '#A7D1E3' }}
                            bg={'#F9F9F9'}
                            className="cardHero" >
                            <CardHeader >
                                <Heading size='md' className="imgHero"> <RiMedalLine /> </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>0 Awards</Text>
                            </CardBody>
                        </Card>
                        <Card as={motion.div}
                            whileHover={{ scale: 1.2, color: '#A7D1E3' }}
                            bg={'#F9F9F9'}
                            className="cardHero">
                            <CardHeader>
                                <Heading size='md' className="imgHero">  <FaUsers /></Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>10+ Clients</Text>
                            </CardBody>
                        </Card>
                        <Card as={motion.div}
                            whileHover={{ scale: 1.2, color: '#A7D1E3' }}
                            bg={'#F9F9F9'}
                            className="cardHero">
                            <CardHeader>
                                <Heading size='md' className="imgHero"> <FaAward /> </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>02 Months experience</Text>
                            </CardBody>
                        </Card>
                        <Card as={motion.div}
                            whileHover={{ scale: 1.2, color: '#A7D1E3' }}
                            bg={'#F9F9F9'}
                            className="cardHero">
                            <CardHeader>
                                <Heading size='md' className="imgHero"> <FaTrophy /> </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>+20 Proyects</Text>
                            </CardBody>
                        </Card>
                    </Stack>

                </Stack>
            </Stack>
        </Container>

    )
}


export default Hero