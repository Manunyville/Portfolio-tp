import './navbar.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading } from '@chakra-ui/react'
import '../../themes'
import { motion } from "framer-motion"

const Navbar = () => {


    return (
        <Container width={1200}>
            <Flex justify={'center'} padding={30} >
                <nav >
                    <HStack gap={500} >
                        <div>
                            <Heading color={'#0C7FB0'} size='md'><strong>Portfolio</strong></Heading>
                        </div>
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
                </nav>
            </Flex >
        </Container>
    )

}
export default Navbar