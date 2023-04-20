import './footer.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, Input, } from '@chakra-ui/react'
import { color, motion } from "framer-motion"
import { AiFillInstagram, AiOutlineYoutube } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";



const Footer = () => {

    return (

        <Stack width="full" bg={'#061820'} color={'#F9F9F9'} marginTop='35px' gap="15px">
            <HStack justify={'space-evenly'} marginTop="35px">
                <VStack>
                    <Heading size='sm'>Customer support</Heading>
                    <Text Size='xs'>Contact me and get consultation on your design</Text>
                </VStack>
                <VStack>
                    <Heading size='sm'>Get Deal & Reveals</Heading>
                    <Text fontSize={'xs'}>Sing up for the email Newslleter.</Text>
                </VStack>
                <VStack>
                    <form>
                        <HStack >
                            <Input type="email" placeholder='Enter email' borderRadius='0px' paddingX='35px' bg={'#FFFFFF'} paddingY='7px' />
                            <Button marginTop='4px' borderRadius='0px' as={motion.button} paddingX='8px'paddingY='7px'whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>Join</Button>
                        </HStack>
                     </form>
                </VStack>
            </HStack>

            <HStack justify={'space-evenly'}>
            <VStack>
                    <Heading size='xs' color={'#07CFB0'}>Manuel Nyville Vito</Heading>
                    <Text>Front end Developer</Text>
                </VStack>
                <VStack>
                    <a href="#misServicios">
                        <Text>Services</Text>
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
                    <Text>Contact me</Text>
                    <Text>+54 9 223 565 5961</Text>
                    <Text>Manuelnyville@gmail.com</Text>

                </VStack>

                <VStack>
                    <Text>Social media</Text>
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
        </Stack>
       

    )
}
export default Footer