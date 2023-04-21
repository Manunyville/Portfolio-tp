import './feedback.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Five from '../../assets/img/fivestars.png'
import Comillas from '../../assets/img/comillas.png'
import Azul from '../../assets/img/imgabstractaizquierda.png'
import { FaUserLock } from 'react-icons/fa'
import marcos from '../../assets/img/Marcos.jpg'
import lukas from '../../assets/img/Lukas.jpg'
import cami from '../../assets/img/Camila.jpeg'
import bootstrap from 'bootstrap'


const Testimonial = () => {

    return (

        <Stack id='testimonios' width={'full'} margin="0 auto">
            <VStack gap="45px" marginLeft="70px">
                <VStack>
                    <Text color={'#0C7FB0'} marginTop="20px">Client's feedback</Text>
                    <HStack>
                        <Image src={Azul} className='imgabstractaFeed' />
                    </HStack>
                    <Stack>
                        <Heading>Testimonials</Heading>
                    </Stack>
                </VStack>
                <HStack gap="30px" className='stackFeed' marginLeft="45px" margin="0 auto">
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} className='cardsFeedback' bg={'#F9F9F9'} width='300px' height='300px'>
                        <HStack gap={10}>
                            <Image className='imgFeed' src={cami} />
                            <Image src={Comillas} w='100px' className='comillasfeed' />
                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading size='md'> Camila Moncada</Heading>
                            <Image src={Five} className='fiveStars' />
                            <Text>Manuel realiza trabajos muy buenos, todos fueron entregados en tiempo y forma; ademas trabaja muy bien con su equipo, sin duda volveria a contratarlos</Text>
                        </CardBody>
                    </Card>

                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} className='cardsFeedback' bg={'#F9F9F9'} width='300px' height='300px'>
                        <HStack >
                            <Image className='imgFeed' src={lukas} />
                            <Image src={Comillas} w='100px' />
                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading size='md'>Lucas Quintero</Heading>
                            <Image src={Five} className='fiveStars' />
                            <Text>Manuel se encargo de la promocion de mis productos materos y se dispararon las ventas!</Text>
                        </CardBody>
                    </Card>

                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} bg={'#F9F9F9'} className='cardsFeedback' width='300px' height='300px'>
                        <HStack >
                            <Image className='imgFeed' src={marcos} />
                            <Image src={Comillas} w='100px' />

                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading size='md'>Marcos Servezynski </Heading>
                            <Image src={Five} className='fiveStars' />
                            <Text>Los trabajos que Manuel ha hecho son muy ingeniosos, las ideas que yo le dije el las tranformo tal cual yo me las imaginaba!</Text>
                        </CardBody>
                    </Card>

                </HStack>
                <VStack gap="15px">
                    <HStack justify={'space-around'}>

                        <Button as={motion.button} borderRadius='50%' bg={'#F9F9F9'} size='xs' whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                        <Button as={motion.button} borderRadius='50%' bg={'#F9F9F9'} size='xs' whileHover={{ backgroundColor: '#0C7FB0' }}> </Button>
                        <Button as={motion.button} borderRadius='50%' bg={'#F9F9F9'} size='xs' whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                    </HStack>
                    <VStack>
                        <Button arginTop='4px' as={motion.button} paddingX='10px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View all</Button>
                    </VStack>
                </VStack>
            </VStack>
        </Stack >

    )
}
export default Testimonial