import React from "react";
import { Stack, HStack, VStack, Button, ButtonGroup, Text, Heading, Image, Card, CardHeader, CardBody, Container } from '@chakra-ui/react'
import './hero.css'
import Foto from '../../assets/img/fotomiafondorenovado.png'
import { motion } from "framer-motion"
import { RiMedalLine } from "react-icons/ri";
import { FaAward, FaUsers, FaTrophy } from "react-icons/fa";

const Hero = () => {



    return (

        <Container id="hero" width={"full"} margin="0">
            <Stack 
         //   marginLeft={{'2xl':'0px',xl:"20px",md:'110px',sm:'55px',base:'0px'}} 
            gap={ "60px"}>
                <HStack 
                width={{ '2xl':'1800px', xl:'1200px',lg:'800px', md:'600px', sm:'300px'}} 
                justifyContent="space-around"
                gap={{"2xl":'0px'}}
                >
                    <VStack>
                        <Stack>
                            <Text fontSize='xl' color={'#0C7FB0'}>Hello, I'm</Text>

                        
                        <Heading size={"lg"}>Manuel Nyville</Heading>
                        <Heading fontSize='xl' color={'#0C7FB0'} >Front End Developer</Heading>
                        <Text color={'#6D7173'}>I am a Front end developer...</Text>
                        </Stack>

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
                      
                    <HStack width={{md:'350px',xl:'450px'}}>
                        <Stack >
                        <Image 
                        src={Foto} 
                        className="fotoMia" 
                        width={{md:'225px',xl:'350px', sm:'100px',base:'50px'}}
                        height={{md:'225px',xl:'350px', sm:'100px',base:'50px'}}/>
                        
                        </Stack>
                    </HStack>
                </HStack>
                <Stack  justify={"space-evenly"} 
                direction={{xl:"row", md:'row',sm:'column',base:'column'}} 
              width={{xl:"1200px",'2xl':'1800px',md:'800px',sm:'600px',base:'300px' }}
                >
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
        </Container>
    
    )
}


export default Hero