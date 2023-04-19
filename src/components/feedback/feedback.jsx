import './feedback.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Five from '../../assets/img/fivestars.png'
import Comillas from '../../assets/img/comillas.png'
import Azul from '../../assets/img/imgabstractaizquierda.png'
import { FaUserLock } from 'react-icons/fa'

const Testimonial = () => {

    return (
        <Container id='testimonios'>
            <VStack>
                <VStack margin={5}>
                    <Text color={'#0C7FB0'}>Client's feedback</Text>
                </VStack>
                    <Heading>Testimonials</Heading>
                <HStack gap={30} className='stackCards' width={1200}>
                    <VStack>
             <Image src={Azul} width={100} height={'auto'} marginBottom={250}/>                   

                    </VStack>
                        <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} alignItems={'center'} bg={'#F9F9F9'} width={400} height={300}>

                            <HStack gap={10} marginLeft={85}>

                                <Image marginLeft={10} className='webImg' src={Web} />
                                <Image src={Comillas} w={100} />
                            </HStack>

                            <CardBody>
                                <Heading size='md' marginLeft={75}> Camila Moncada</Heading>
                                <Image src={Five} marginLeft={100} className='fiveStars' />
                                <Text>Manuel realiza trabajos muy buenos, todos fueron entregados en tiempo y forma; ademas trabaja muy bien con su equipo, sin duda volveria a contratarlos</Text>
                            </CardBody>

                        </Card>

                        <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} alignItems={'center'} marginTop={25} marginLeft={5} bg={'#F9F9F9'} width={400} height={300}>
                            <HStack gap={10} marginLeft={85}>
                                <Image className='webImg' src={Web} marginLeft={5} />
                                <Image src={Comillas} w={100} />
                            </HStack>
                            <CardBody justifyContent={'center'}>
                                <Heading size='md' marginLeft={75}>Lukas Olthoff</Heading>
                                <Image src={Five} className='fiveStars' marginLeft={100} />

                                <Text>Los trabajos realizados por Manuel fueron increibles, mucha responsabilidad de su parte y siempre muy creativo!</Text>
                            </CardBody>

                        </Card>

                        <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} bg={'#F9F9F9'} marginTop={25} alignItems={'center'} width={400} height={300}>
                            <HStack gap={10} marginLeft={85}>
                                <Image className='webImg' src={Web} marginLeft={45} />
                                <Image src={Comillas} w={100} />

                            </HStack>
                            <CardBody justify={'center'}>
                                <Heading size='md' marginLeft={55}>Marcos Servezinski </Heading>
                                <Image src={Five} className='fiveStars' marginLeft={100} />

                                <Text>Los trabajos que Manuel ha hecho son muy ingenios, las ideas que yo le dije el las tranformo tal cual yo me las imaginaga!</Text>
                            </CardBody>

                        </Card>
                    </HStack>
                
                <VStack>
                    <div>aca necesito un carrusel para mas opiniones</div>
                    <Button marginTop={4} as={motion.button} paddingX={10} whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'> View All</Button>

                </VStack>
            </VStack>
        </Container>

    )
}
export default Testimonial