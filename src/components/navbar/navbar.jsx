import './navbar.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text } from '@chakra-ui/react'
import '../../themes'
import { motion } from "framer-motion"

const Navbar = () => {


    return (
        <>
            <Flex justify={'center'} padding={30} >
                <nav >
                    <HStack gap={500} >
                        <div>
                            <Text color={'#0C7FB0'}><strong>Portfolio</strong></Text>
                        </div>
                    <ButtonGroup spacing='25'>
                        <Button as={motion.button}  whileHover={{  color:'#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>Home</Button>
                        <Button as={motion.button}  whileHover={{ color:'#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>About</Button>
                        <Button as={motion.button}  whileHover={{ color:'#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>Services</Button>
                        <Button as={motion.button}  whileHover={{ color:'#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>Portfolio</Button>
                        <Button as={motion.button}  whileHover={{  color:'#0C7FB0' }} bg={'#0C7FB0'} color={'#F9F9F9'} padding={4} border={'none'} borderRadius={5} size='xs'>Contact me</Button>
                    </ButtonGroup>
                </HStack>
            </nav>
        </Flex >
        </>
    )

}
export default Navbar