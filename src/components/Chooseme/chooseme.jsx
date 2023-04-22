import './chooseme.css'
import React from 'react'
import { Stack, VStack, Text, Heading, Image, Card, CardBody, } from '@chakra-ui/react'
import Web from '../../assets/img/website.png'
import Creativo from '../../assets/img/Ideacreativa.png'
import equipo from '../../assets/img/teamplayer.png'

const Choose = () => {

    return (

        <Stack width={"full"} id='eligeme'>
            <VStack justifyContent={'space-around'} gap={16}> 
                <VStack  >
                    <Text color={'#0C7FB0'} fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Why you should choose me</Text>
                    <Heading fontSize={{xl:'25px',md:'20px',sm:'15px',base:'12px'}}>Why choose me</Heading>
                </VStack>
                <Stack  w={{base:'full', md:'80%'}}
                direction={{base:'column', md:'row'}} justifyContent={'space-around'}alignItems={'center'} gap={{base:4}}>
                <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: '2xs' }} h={{ base: 'auto', md: '240px' }}
                        className='cardsCh'
                        position={'relative'}
                        backgroundColor={'#F9F9F9'}>
                        <Image
                            src={equipo}
                            borderRadius={'50%'}
                            position={'absolute'}
                            top={{ base: -4, md: -14 }}
                            width={{ base: '30px', md: '80px' }}
                            height={{ base: '30px', md: '80px' }} />
                        <CardBody textAlign={'center'} >
                            <Heading fontSize={{ base: '6px', md: '15px' }}>Team player </Heading>
                            <Text fontSize={{ base: '4px', md: '15px' }}>Junto a otros desarrolladores nos divimos las tareas y debatimos ideas para crear una pagina con mayor criterio y objetividad</Text>
                        </CardBody>
                    </Card>

                    <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: '2xs' }} h={{ base: 'auto', md: '240px' }}
                        className='cardsCh'
                        position={'relative'}
                        backgroundColor={'#F9F9F9'}>
                        <Image
                            src={Web}
                            borderRadius={'50%'}
                            position={'absolute'}
                            top={{ base: -4, md: -14 }}
                            width={{ base: '30px', md: '80px' }}
                            height={{ base: '30px', md: '80px' }} />
                        <CardBody textAlign={'center'} >
                            <Heading fontSize={{ base: '6px', md: '15px' }}>Responsive </Heading>
                            <Text fontSize={{ base: '4px', md: '15px' }}>Entrego las applicaciones webs/paginas webs antes del tiempo estipulado</Text>
                        </CardBody>
                    </Card>

                    <Card bg={'#F9F9F9'} align={'center'} w={{ base: '40%', md: '2xs' }} h={{ base: 'auto', md: '240px' }}
                        className='cardsCh'
                        position={'relative'}
                        backgroundColor={'#F9F9F9'}>
                        <Image
                            src={Creativo}
                            borderRadius={'50%'}
                            position={'absolute'}
                            top={{ base: -4, md: -14 }}
                            width={{ base: '30px', md: '80px' }}
                            height={{ base: '30px', md: '80px' }} />
                        
                        <CardBody textAlign={'center'} >
                            <Heading fontSize={{ base: '6px', md: '15px' }}>Creative design </Heading>
                            <Text fontSize={{ base: '4px', md: '15px' }}>Desarrollo ideas creativas tanto en el diseño de la applicacion web como en su funcionamiento.</Text>
                        </CardBody>
                    </Card>
               
                </Stack>
            </VStack>
        </Stack>

       

    )
}
export default Choose