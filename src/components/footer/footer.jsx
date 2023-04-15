import './footer.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image,Card, CardHeader, CardBody, Input, } from '@chakra-ui/react'
import { motion } from "framer-motion"


const Footer = () =>{

    return(
        <Container width={1200} height={450}>
            <HStack w={1200}  bg={'#061820'} color={'#F9F9F9'}>
                <VStack>
                    <Heading size='sm'>Customer support</Heading>
                    <Text>Contact me and get consultation on your design</Text>
                </VStack>
                <VStack>
                    <Heading size='sm'>Get Deal & Reveals</Heading>
                    <Text>Sing up for the email Newslleter.</Text>
                </VStack>
                <VStack>
                    <form >
                        <HStack>

                        <Input type="email" placeholder='Enter email' borderRadius={0} paddingX={75}/>
                        <Button marginTop={4} borderRadius={0} as={motion.button} paddingX={10} whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>Join</Button>
                        </HStack>

                    </form>
                </VStack>
            </HStack>
            <HStack w={1200}  bg={'#061820'} color={'#F9F9F9'}>
                <VStack>
                    <Heading size='xs'>Manuel Nyville Vito</Heading>
                    <Text>Front end Developer</Text>
                </VStack>
                <VStack>
                    <Text>Services</Text>
                    <Text>Website design</Text>
                    <Text>Application Design</Text>
                    <Text>Dashboard design</Text>
                </VStack>
                <VStack>
                    <Text>About </Text>
                    <Button>Blog</Button>
                    <Button>Mission</Button>
                    <Button>My story</Button>

                </VStack>
                <VStack>
                    <Text>Contact me</Text>
                    <Text>+54 9 223 565 5961</Text>
                    <Text>Manuelnyville@gmail.com</Text>

                </VStack>
                <VStack>
                    <Text>Social media</Text>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    

                </VStack>

            </HStack>

        </Container>
    )
}
export default Footer