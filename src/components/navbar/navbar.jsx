import './navbar.css'
import React from 'react'
import { Stack, HStack, Button, ButtonGroup, Container, Heading } from '@chakra-ui/react'
import { motion } from "framer-motion"

const Navbar = () => {


    return (

        <Stack w={'full'} direction={'row'} justifyContent='space-around' alignItems={'center'} p={6}>
            <Stack display={{ base: 'none', md: 'flex' }}>
                <Heading color={'#0C7FB0'} size='lg' >Portfolio</Heading>
            </Stack>
            <Stack direction={'row'} gap={4} >
                    <a href="#hero">
                        < Button as={motion.button} whileHover={{ color: '#0C7FB0' }
                        } color={'#061820'} border={'none'}variant='link' >
                            Home
                        </Button >
                    </a >
                    <a href="#about">
                        <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'}  variant='link'>
                            About
                        </Button>
                    </a>
                    <a href="#misServicios">
                        <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} variant='link'>
                            Services
                        </Button>
                    </a>
                    <a href="#proyectos">
                        <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} variant='link'>
                            Portfolio
                        </Button>
                    </a>
                    <a href="#contact">

                        <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} bg={'#0C7FB0'} color={'#F9F9F9'} p={4} border={'none'} borderRadius={5} size='xs'>
                            Contact me
                        </Button>
                    </a>
              
            </Stack>

         


        </Stack >

    )

}
export default Navbar