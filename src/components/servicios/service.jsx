import './service.css'
import React from 'react'
import { Stack, HStack, VStack, Text, Container, Heading, Image, Card, CardBody, } from '@chakra-ui/react'
import Web from '../../assets/img/codigoweb.png'
import diseño from '../../assets/img/Diseñodepagina.png'
import Diseñoweb from '../../assets/img/desarrolloweb.png'

const Services = () => {


    return (

        <Stack width="full" id='misServicios'>
            <VStack >
                <VStack >
                    <Text color={'#0C7FB0'} fontSize={{ xl: '15px', md: '10px', sm: '8px', base: '5px' }}>Services I provide</Text>
                    <Heading fontSize={{ xl: '40px', md: '30px', sm: '20px', base: '10px' }}>My Services</Heading>
                </VStack>
                <Stack w={'full'} alignItems={'center'} justifyContent={'center'}>
                    <Stack w={'80%'} padding={{ base: 8, md: 20 }} direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'center', md: 'space-evenly' }} alignItems={'center'} gap={4}>

                        <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: '2xs' }} h={{ base: 'auto', md: '140px' }}
                            className='cardServ'
                            position={'relative'}
                            backgroundColor={'#F9F9F9'}
                        >
                            <Image
                                src={Diseñoweb}
                                position={'absolute'}
                                top={{ base: -4, md: -12 }}
                                width={{ base: '30px', md: '80px' }}
                                height={{ base: '30px', md: '80px' }} />
                            <CardBody textAlign={'center'} >
                                <Heading fontSize={{ base: '6px', md: '15px' }}>Website design </Heading>
                                <Text fontSize={{ base: '4px', md: '15px' }}>Realizo los diseños de las paginas de acuerdo a lo que el cliente desee.</Text>
                            </CardBody>
                        </Card>
                        <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: '2xs' }} h={{ base: 'auto', md: '140px' }}
                            className='cardServ'
                            position={'relative'}
                            backgroundColor={'#F9F9F9'}
                        >
                            <Image
                                src={diseño}
                                position={'absolute'}
                                top={{ base: -4, md: -12 }}
                                width={{ base: '30px', md: '80px' }}
                                height={{ base: '30px', md: '80px' }} />
                            <CardBody textAlign={'center'} >
                                <Heading fontSize={{ base: '6px', md: '15px' }}>Website developement </Heading>
                                <Text fontSize={{ base: '4px', md: '15px' }}>Transformo ideas complejas en paginas web sencillas de utilizar.</Text>
                            </CardBody>
                        </Card>
                        <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: '2xs' }} h={{ base: 'auto', md: '140px' }}
                            className='cardServ'
                            position={'relative'}
                            backgroundColor={'#F9F9F9'}>

                            <Image
                                src={diseño}
                                position={'absolute'}
                                top={{ base: -4, md: -12 }}
                                width={{ base: '30px', md: '80px' }}
                                height={{ base: '30px', md: '80px' }} />
                            <CardBody textAlign={'center'} >
                                <Heading fontSize={{ base: '6px', md: '15px' }}>Content creation </Heading>
                                <Text fontSize={{ base: '4px', md: '15px' }}>Realizo contenido para marcas con el objetivo de impulsar sus ventas.</Text>
                            </CardBody>
                        </Card>
                    </Stack>
                </Stack>
            </VStack>
        </Stack>
    )
}
export default Services