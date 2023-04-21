import './navbar.css'
import React from 'react'
import { Stack, HStack, Button, ButtonGroup, Container, Heading } from '@chakra-ui/react'
import { motion } from "framer-motion"

const Navbar = () => {


    return (
        <Container width={{'2xl':"full", xl:'1200px', lg:'1000px',md:'800px',xs:'600px'}} >
            <Stack  padding="15px">
                <nav>
                    <HStack gap={{ "2xl":'600px',xl:"500px", md:"50px",sm:"10px"}} 
                    justify={'center'} >
                        <Stack>
                            <Heading color={'#0C7FB0'} size='lg' >Portfolio</Heading>
                        </Stack>
                        <ButtonGroup spacing='25'>
                            <a href="#hero">

                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                    Home
                                </Button>
                            </a>
                            <a href="#about">

                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                    About
                                </Button>
                            </a>
                            <a href="#misServicios">

                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                    Services
                                </Button>
                            </a>
                            <a href="#proyectos">

                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                    Portfolio
                                </Button>
                            </a>
                            <a href="#contact">

                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} bg={'#0C7FB0'} color={'#F9F9F9'} padding={4} border={'none'} borderRadius={5} size='xs'>
                                    Contact me
                                </Button>
                            </a>
                        </ButtonGroup>
                    </HStack>
                    <hr />
                </nav>

            </Stack>
        </Container>
    )

}
export default Navbar