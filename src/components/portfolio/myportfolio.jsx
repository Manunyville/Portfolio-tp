import './myportfolio.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, Image, Text, Container, Heading, Card, CardHeader, CardBody, CardFooter, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Fotaki from '../../assets/img/codigoweb.png'
import Azderecha from '../../assets/img/imgabstractaderecha.png'


const Portfolio = () => {

    return (
        <Container id='proyectos' width="full">
            <VStack>
                <VStack marginTop={{xl:'10px',md:'10px',sm:'120px'}}>
                    <HStack width="full">
                        <Image src={Azderecha} className='imgAbs' />
                    </HStack>
                    <Text color={'#0C7FB0'}>Recent projects</Text>
                    <Heading>My Portfolio</Heading>
                </VStack>
                <HStack gap='75px' 
                className='stackPortfolio' 
                flexDirection={{xl:'row',md:'row', sm:'column',base:'column'}}>
                    <Card 
                    width={{xl:'270px', md: '220px',sm:'170px',base:'110px' }}
                    height={{xl:'350px',md:'auto' , xs:'auto',base:'auto'}}
                    bg={'#F9F9F9'} 
                    marginLeft='10px'
                    alignItems={'center'}>
                        <CardHeader>

                            <Image src={Fotaki} 
                            height={{xl:'150px',md:'100px',sm:'70px',base:'30px'}} />
                            <Heading fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}> Portfolio V1</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Es una version anterior de portfolio</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={{xl:'65px',md:'35px',sm:'10px'}}
                                size={{base:'xs'}}
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>


                    </Card>
                    <Card 
                    width={{xl:'270px', md: '220px',sm:'170px',base:'110px' }} 
                    height={{xl:'350px',md:'auto' , xs:'auto',base:'auto'}}
                     bg={'#F9F9F9'} 
                     marginLeft='10px'
                     alignItems={'center'}>

                        <CardHeader>
                            <Image src={Fotaki}
                              height={{xl:'150px',md:'100px',sm:'70px',base:'30px'}} />
                            <Heading fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}> Forniture web</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>I create a web page for a forniture market</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={{xl:'65px',md:'35px',sm:'10px'}}
                                size={{base:'xs'}}
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>


                    </Card>
                    <Card 
                    width={{xl:'270px', md: '220px',sm:'170px',base:'110px' }}
                    height={{xl:'350px',md:'auto' , xs:'auto',base:'auto'}}
                     bg={'#F9F9F9'} 
                     marginLeft='10px'
                     alignItems={'center'}>

                        <CardHeader>
                            <Image src={Fotaki} 
                             height={{xl:'150px',md:'100px',sm:'70px',base:'30px'}} />
                            <Heading fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}> Promoving Torpedo</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Doy a conocer un nuevo modelo, un torpedo deluxe</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={{xl:'65px',md:'35px',sm:'10px'}}
                                size={{base:'xs'}}
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