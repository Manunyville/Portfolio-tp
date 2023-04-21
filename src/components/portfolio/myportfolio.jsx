import './myportfolio.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, Image, Text, Container, Heading, Card, CardHeader, CardBody, CardFooter, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Fotaki from '../../assets/img/codigoweb.png'
import Azderecha from '../../assets/img/imgabstractaderecha.png'


const Portfolio = () => {

    return (
        <Container id='proyectos' width="full">
            <VStack >
                <VStack marginTop={{xl:'10px',md:'10px',sm:'120px'}}>
                    <HStack width="full">
                        <Image src={Azderecha} className='imgAbs' />
                    </HStack>
                    <Text color={'#0C7FB0'}>Recent projects</Text>
                    <Heading>My Portfolio</Heading>
                </VStack>
                <HStack gap='75px' className='stackPortfolio'>
                    <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px'>
                        <CardHeader>

                            <Image src={Fotaki} height='150px' />
                            <Heading size='md'> Portfolio V1</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Es una version anterior de portfolio</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={65}
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>


                    </Card>
                    <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px'>

                        <CardHeader>
                            <Image src={Fotaki} height='150px' />
                            <Heading size='md'> Forniture web</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>I create a web page for a forniture market</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX='65px'
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>


                    </Card>
                    <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px'>

                        <CardHeader>
                            <Image src={Fotaki} height='150px' />
                            <Heading size='md'> Promoving Torpedo</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Doy a conocer un nuevo modelo, un torpedo deluxe</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX='65px'
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'} bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>

                    </Card>
                </HStack>
                <Stack>
                    <Button marginTop='4px'
                        as={motion.button}
                        paddingX='10px'
                        whileHover={{ color: '#0C7FB0' }}
                        color={'#F9F9F9'}
                        bg={'#0C7FB0'}
                        variant='solid'>
                        View All
                    </Button>
                </Stack>
            </VStack>
        </Container>
    )
}
export default Portfolio