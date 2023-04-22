import './feedback.css'
import React from 'react'
import { Stack, HStack, VStack, Button, Text, Heading, Image, Card, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Five from '../../assets/img/fivestars.png'
import Comillas from '../../assets/img/comillas.png'
import Azul from '../../assets/img/imgabstractaizquierda.png'
import marcos from '../../assets/img/Marcos.jpg'
import lukas from '../../assets/img/Lukas.jpg'
import cami from '../../assets/img/Camila.jpeg'



const Testimonial = () => {

    return (

        <Stack id='testimonios' width={'full'} >
            <VStack gap={20}>
                <VStack gap={10}>
                    <Text color={'#0C7FB0'}
                        fontSize={{ xl: '15px', md: '10px', sm: '8px', base: '5px' }}
                    >Client's feedback</Text>
                    <HStack>
                        <Image src={Azul} className='imgabstractaFeed' />
                    </HStack>
                    <Stack>
                        <Heading fontSize={{ xl: '25px', md: '20px', sm: '15px', base: '12px' }}>Testimonials</Heading>
                    </Stack>
                </VStack>
                <Stack gap="30px"
                    className='stackFeed'
                    marginLeft="45px"
                    flexDirection={{ base: 'column', md: 'row' }}
                    alignItems={'center'}>

                    <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: 'xs' }} h={{ base: 'auto', md: '240px' }}
                        className='cardServ'
                        position={'relative'}
                        backgroundColor={'#F9F9F9'}>

                        <Image
                            src={marcos}
                            borderRadius={'50%'}
                            position={'absolute'}
                            top={{ base: -4, md: -14 }}
                            width={{ base: '30px', md: '80px' }}
                            height={{ base: '30px', md: '80px' }} />
                        <Stack w="full" align={'end'}>
                            <Image src={Comillas}
                                w={{ base: '15px', md: '60px' }} />
                        </Stack>
                        <CardBody textAlign={'center'} >
                            <Heading fontSize={{ base: '6px', md: '15px' }}>Marcos Servezynski </Heading>
                            <Text fontSize={{ base: '4px', md: '15px' }}>Los trabajos que Manuel ha hecho son muy ingeniosos, las ideas que yo le dije el las tranformo tal cual yo me las imaginaba!.</Text>
                        </CardBody>
                    </Card>
                    <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: 'xs' }} h={{ base: 'auto', md: '240px' }}
                        className='cardServ'
                        position={'relative'}
                        backgroundColor={'#F9F9F9'}>

                        <Image
                            src={cami}
                            borderRadius={'50%'}
                            position={'absolute'}
                            top={{ base: -4, md: -14 }}
                            width={{ base: '30px', md: '80px' }}
                            height={{ base: '30px', md: '80px' }} />
                        <Stack w="full" align={'end'}>
                            <Image src={Comillas}
                                w={{ base: '15px', md: '60px' }} />
                        </Stack>
                        <CardBody textAlign={'center'} >
                            <Heading fontSize={{ base: '6px', md: '15px' }}>Camila Moncada </Heading>
                            <Text fontSize={{ base: '4px', md: '15px' }}>Manuel realiza trabajos muy buenos, todos fueron entregados en tiempo y forma; ademas trabaja muy bien con su equipo, sin duda volveria a contratarlos.</Text>
                        </CardBody>
                    </Card>
                    <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: 'xs' }} h={{ base: 'auto', md: '240px' }}
                        className='cardServ'
                        position={'relative'}
                        backgroundColor={'#F9F9F9'}>

                        <Image
                            src={lukas}
                            borderRadius={'50%'}
                            position={'absolute'}
                            top={{ base: -4, md: -14 }}
                            width={{ base: '30px', md: '80px' }}
                            height={{ base: '30px', md: '80px' }} />
                        <Stack w="full" align={'end'}>
                            <Image src={Comillas}
                                w={{ base: '15px', md: '60px' }} />
                        </Stack>
                        <CardBody textAlign={'center'} >
                            <Heading fontSize={{ base: '6px', md: '15px' }}>Lucas Quintero </Heading>
                            <Text fontSize={{ base: '4px', md: '15px' }}>Manuel se encargo de la promocion de mis productos materos y se dispararon las ventas!.</Text>
                        </CardBody>
                    </Card>

                </Stack>
                <VStack gap="8px">
                    <HStack justify={'space-around'}>

                        <Button as={motion.button}
                            borderRadius='50%'
                            bg={'#F9F9F9'}
                            size='xs'
                            whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                        <Button as={motion.button}
                            borderRadius='50%'
                            bg={'#F9F9F9'}
                            size='xs'
                            whileHover={{ backgroundColor: '#0C7FB0' }}> </Button>
                        <Button as={motion.button}
                            borderRadius='50%'
                            bg={'#F9F9F9'}
                            size='xs'
                            whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                    </HStack>
                    <VStack>
                        <Button marginTop='4px'
                            as={motion.button}
                            paddingX='10px'
                            whileHover={{ color: '#0C7FB0' }}
                            color={'#F9F9F9'}
                            bg={'#0C7FB0'}
                            variant='solid'>View all</Button>
                    </VStack>
                </VStack>
            </VStack>
        </Stack >

    )
}
export default Testimonial