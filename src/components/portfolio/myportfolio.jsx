import './myportfolio.css'
import React from 'react'
import { Stack, VStack, Button, Image, Text, Heading, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Azderecha from '../../assets/img/imgabstractaderecha.png'
import Deluxe from '../../assets/img/promoTorpedo.png'
import Portafolio from '../../assets/img/portfolioV1.jpeg'
import Hotel from '../../assets/img/Hotelpagina.jpeg'

const Portfolio = () => {

    return (
        <Stack id='proyectos' w="full" justifyContent={'center'} alignItems={'center'}>
            <Stack w="full" align={'end'}>
                <Image src={Azderecha} className='imgAbs' h={'70px'} w={'50px'} />
            </Stack>
            <VStack w={{ base: 'full', md: '80%' }} p={2} >
                <VStack>
                    <Text color={'#0C7FB0'}>Recent projects</Text>
                    <Heading>My Portfolio</Heading>
                </VStack>
                <Stack
                    gap={6}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={{ base: 'center', md: 'space-evenly' }}
                    direction={{ base: 'column', md: 'row' }}
                    className='stackPortfolio'  >
                    <Card
                        width={'xs'}
                        bg={'#F9F9F9'}
                        alignItems={'center'}>
                        <CardHeader>
                            <Image src={Portafolio}
                            />
                            <Heading fontSize={{ base: '12px', md: '18px' }}> Portfolio V1</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize={{ base: '10px', md: '15px' }}>Es una version anterior de portfolio</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={{ xl: '65px', md: '35px', sm: '10px' }}
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>
                    </Card>
                    <Card
                        width={'xs'}
                        bg={'#F9F9F9'}
                        alignItems={'center'}>
                        <CardHeader>
                            <Image src={Hotel} />
                            <Heading fontSize={{ base: '12px', md: '18px' }}> Hotel web</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize={{ base: '10px', md: '15px' }}>Es una pagina creada para un hotel turistico</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={{ xl: '65px', md: '35px', sm: '10px' }}
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>
                    </Card>
                    <Card
                        width={'xs'}
                        bg={'#F9F9F9'}
                        alignItems={'center'}>
                        <CardHeader>
                            <Image src={Deluxe} w={'140px'} h={'140px'} />
                            <Heading fontSize={{ base: '12px', md: '18px' }}> Promove torpedo</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize={{ base: '10px', md: '15px' }}>Doy a conocer un nuevo modelo de mate, un torpedo deluxe</Text>
                            <Button marginTop='4px'
                                as={motion.button}
                                paddingX={{ xl: '65px', md: '35px', sm: '10px' }}
                                whileHover={{ color: '#0C7FB0' }}
                                color={'#F9F9F9'}
                                bg={'#0C7FB0'}
                                variant='solid'>
                                View on github
                            </Button>
                        </CardBody>
                    </Card>
                </Stack>
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
        </Stack>
    )
}
export default Portfolio