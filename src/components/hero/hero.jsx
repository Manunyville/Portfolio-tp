import React from "react";
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Heading, Image, SimpleGrid, Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import './hero.css'
import Foto from '../../assets/img/retrato.jpeg'

import { RiMedalLine } from "react-icons/ri";
import { FaAward, FaUsers, FaTrophy } from "react-icons/fa";

const Hero = () =>{

    
    
    return(
        
        <section>
            <div className="divHero">
                <HStack justify={'center'} gap={300}>
                    <VStack justify={"space-around"}>                
                    <Text >Hello, I'm</Text>                        
                    <Heading>Manuel Nyville</Heading>
                    <h3>Front End Developer</h3>
                    <Text>I am a Front end developer...</Text>
                    <ButtonGroup>
                        <Button  color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>Hire me</Button>
                        <Button color={'#0C7FB0'} colorScheme='teal' variant='outline' >See Portfolio</Button>
                    </ButtonGroup>
                    </VStack>
                    <HStack>

                   <img src={Foto}className="fotoMia" />                
                    </HStack>
                </HStack>
                <Stack justify={"space-evenly"} flexDirection={"row"} >
                    <Card bg={'#F9F9F9'}>
                        <CardHeader>
                        <Heading size='md'> <RiMedalLine/> </Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>0 Awards</Text>
                        </CardBody>
                     </Card>
                     <Card bg={'#F9F9F9'}>
                        <CardHeader>
                        <Heading size='md'>  <FaUsers/></Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>10+ Clients</Text>
                        </CardBody>
                     </Card>
                     <Card bg={'#F9F9F9'}>
                        <CardHeader>
                        <Heading size='md'> <FaAward/> </Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>02 Months experience</Text>
                        </CardBody>
                     </Card>
                     <Card bg={'#F9F9F9'}> 
                        <CardHeader>
                        <Heading size='md'> <FaTrophy/> </Heading>
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