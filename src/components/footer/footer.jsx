import './footer.css'
import React from 'react'
import { Stack, HStack, VStack, Button, ButtonGroup, Text, Heading, Input, } from '@chakra-ui/react'
import {  motion } from "framer-motion"
import { AiFillInstagram, AiOutlineYoutube } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";



const Footer = () => {

    return (

        <Stack width={{base:'full', xl:'full', md:'1300px',}} bg={'#061820'} color={'#F9F9F9'} marginTop='35px' gap="15px">
            <Stack justify={'space-evenly'} marginTop="35px" direction={{base:'column', md:'row'}} textAlign={{base:'center'}}>
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
                            paddingX={{base:'8px',md:'35' }}
                            bg={'#FFFFFF'} 
                            paddingY={{base:'4px',md:'24px'}} />
                            <Button marginTop='0px'
                            borderRadius='2px' 
                            as={motion.button} 
                            paddingX={{base:'4px',md:'25px'}}
                            paddingY={{base:'4px',md:'25px'}}
                            whileHover={{ color: '#0C7FB0' }} 
                            color={'#F9F9F9'} 
                            bg={'#0C7FB0'} 
                            variant='solid'>Join</Button>
                            </ButtonGroup>
                        </HStack>
                     </form>
                </VStack>
            </Stack>

            <Stack justify={'space-evenly'}  direction={{base:'column', md:'row'}}>
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
                        <a href="https://www.instagram.com/bombillaloca/?hl=es-la">
                            <AiFillInstagram />
                        </a>
                    </Button>
                </VStack>

            </Stack>
            <HStack justify="center" >
                <Text fontSize={{base:'8px',md:'13px'}}>Copyright 2023 Inc. All rights reserved. | Terms of Use | Updated Privacy Policy | Accessibility</Text>
            </HStack>
        </Stack>
       

    )
}
export default Footer