import './footer.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, Input, } from '@chakra-ui/react'
import { color, motion } from "framer-motion"
import { AiFillInstagram, AiOutlineYoutube } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";



const Footer = () => {

    return (

        <Stack width={{'2xl':"full", xl:'full', md:'1300px',sm:'900px',base:'550px'}} bg={'#061820'} color={'#F9F9F9'} marginTop='35px' gap="15px">
            <HStack justify={'space-evenly'} marginTop="35px">
                <VStack>
                    <Heading fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Customer support</Heading>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Contact me and get consultation on your design</Text>
                </VStack>
                <VStack>
                    <Heading fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Get Deal & Reveals</Heading>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Sing up for the email Newslleter.</Text>
                </VStack>
                <VStack>
                    <form>
                        <HStack  alignItems="center">
                            <ButtonGroup spacing="0px" >
                            <Input type="email" 
                            placeholder='Enter email' 
                            borderRadius='0px' 
                            paddingX='35px' 
                            bg={'#FFFFFF'} 
                            paddingY='24px' />
                            <Button marginTop='0px'
                            borderRadius='2px' 
                            as={motion.button} 
                            paddingX='25px'
                            paddingY='25px'
                            whileHover={{ color: '#0C7FB0' }} 
                            color={'#F9F9F9'} 
                            bg={'#0C7FB0'} 
                            variant='solid'>Join</Button>
                            </ButtonGroup>
                        </HStack>
                     </form>
                </VStack>
            </HStack>

            <HStack justify={'space-evenly'}>
            <VStack>
                    <Heading fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}} color={'#07CFB0'}>Manuel Nyville Vito</Heading>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Front end developer</Text>
                </VStack>
                <VStack>
                    <a href="#misServicios">
                        <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Services</Text>
                    </a>
                    <a href="#misServicios">
                        <Button as={motion.button} whileHover={{ color: '#07CFB0' }} color={'#F9F9F9'} variant='link'  >
                            Website design
                        </Button>
                    </a>
                    <a href="#misServicios">
                        <Button as={motion.button} whileHover={{ color: '#07CFB0' }} color={'#F9F9F9'} variant='link'>
                            Application design
                        </Button>
                    </a>
                    <a href="#misServicios">
                        <Button as={motion.button} whileHover={{ color: '#07CFB0' }} color={'#F9F9F9'} variant='link'>
                            Web manteinance
                        </Button>
                    </a>
                </VStack>
                <VStack>
                    <a href="#about">
                        <Text>About</Text>
                    </a>
                    <a href="#hero">
                        <Button as={motion.button} whileHover={{ color: '#07CFB0' }} color={'#F9F9F9'} variant='link' >
                            Blog
                        </Button>
                    </a>
                    <a href="#eligeme">
                        <Button as={motion.button} whileHover={{ color: '#07CFB0' }} color={'#F9F9F9'} variant='link'>
                            Mission
                        </Button>
                    </a>
                    <a href="#testimonios">
                        <Button as={motion.button} whileHover={{ color: '#07CFB0' }} color={'#F9F9F9'} variant='link'>
                            My story
                        </Button>
                    </a>
                </VStack>

                <VStack>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Contact me</Text>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>+54 9 223 565 5961</Text>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}> Manuelnyville@gmail.com</Text>

                </VStack>

                <VStack>
                    <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Social media</Text>
                    <Button as={motion.button} whileHover={{ scale: 1.2 }} colorScheme='teal' variant={'ghost'}>
                        <a href="https://www.facebook.com/profile.php?id=100009833178957">
                            <FiFacebook />
                        </a>
                    </Button>
                    <Button as={motion.button} whileHover={{ scale: 1.2 }} colorScheme='teal' variant={'ghost'}>
                        <a href="https://twitter.com/Manunyville">
                            <TfiTwitter />
                        </a>
                    </Button>
                    <Button as={motion.button} whileHover={{ scale: 1.2 }} colorScheme='teal' variant={'ghost'}>
                        <a href="https://www.youtube.com/@manuunyville6058/featured">
                            <AiOutlineYoutube />
                        </a>
                    </Button>
                    <Button as={motion.button} whileHover={{ scale: 1.2 }} colorScheme='teal' variant={'ghost'}>
                        <a href="https://www.instagram.com/manunyville/?hl=es-la">
                            <AiFillInstagram />
                        </a>
                    </Button>
                </VStack>

            </HStack>
            <HStack justify="center" >
                <Text fontSize={{xl:'17px',md:'13px',sm:'10px',base:'8px'}}>Copyright 2023 Inc. All rights reserved. | Terms of Use | Updated Privacy Policy | Accessibility</Text>
            </HStack>
        </Stack>
       

    )
}
export default Footer