import './chooseme.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Creativo from '../../assets/img/Ideacreativa.png'
import equipo from '../../assets/img/teamplayer.png'

const Choose = () => {

    return (

        <Stack width={"full"} marginTop="10px" id='eligeme'>
            <VStack width={{xl:'1200px',md:'1000px',sm:'800px',base:'600px'}} margin="0 auto" gap="55px" marginTop="10px" marginRight="0 auto" >
                <VStack justifyContent={'space-between'} >
                    <Text color={'#0C7FB0'} fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Why you should choose me</Text>
                    <Heading fontSize={{xl:'25px',md:'20px',sm:'15px',base:'12px'}}>Why choose me</Heading>
                </VStack>
                <Flex gap="85px" flexDirection={{xl:'row',md:'row',sm:'column',base:'column' }}>
                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    className='cardsCh' bg={'#F9F9F9'} 
                    height={{xl:"220px",md:'190px',sm:'130px',base:'90px' }}
                    width={{ xl: '250px', md:'200px',sm:'170px',base:'120px'  }}
                    alignItems={'center'}>
                        <Stack>
                            <Image className='imgWeb' 
                            src={equipo} 
                            bottom={{xl:'200px',md:'170px',sm:'115px',base:'80px'}}
                            left={{xl:'75px',md:'55px',sm:'65px',base:'50px' }} 
                              height={{xl:'80px', md:'70px',sm:'40px',base:'20px'}} 
                              width= {{xl:'80px',md:'70px',sm:'40px',base:'20px'}}/>
                        </Stack>
                        <CardBody>
                            <Stack textAlign={'center'}>
                                <Heading fontSize={{xl:'20px',md:'15px',sm:'12px',base:'8px'}}> Team player</Heading>
                            </Stack>
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Junto a otros desarrolladores nos divimos las tareas y debatimos ideas para crear una pagina con mayor criterio y objetividad</Text>
                        </CardBody>

                    </Card>
                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }}
                    bg={'#F9F9F9'} 
                    className='cardsCh' 
                    height={{xl:"220px",md:'190px',sm:'130px',base:'90px' }}
                    width={{ xl: '250px', md:'200px',sm:'170px',base:'120px'  }}
                    alignItems={'center'}>
                        <Stack>
                             <Image  className='imgWeb'
                              src={Creativo}
                              bottom={{xl:'200px',md:'170px',sm:'115px',base:'80px'}}
                             left={{xl:'75px',md:'55px',sm:'65px',base:'50px' }} 
                             height={{xl:'80px', md:'70px',sm:'40px',base:'20px'}} 
                             width= {{xl:'80px',md:'70px',sm:'40px',base:'20px'}}/>
                        </Stack>
                        <CardBody>
                            <Stack textAlign={'center'}>
                                <Heading fontSize={{xl:'20px',md:'15px',sm:'12px',base:'8px'}}> Creative design</Heading>
                            </Stack>
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Desarrollo ideas creativas tanto en el diseño de la applicacion web como en su funcionamiento.</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div}
                     whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    bg={'#F9F9F9'} 
                    className='cardsCh' 
                    height={{xl:"220px",md:'190px',sm:'130px',base:'90px' }}
                    width={{ xl: '250px', md:'200px',sm:'170px',base:'120px'  }}
                    alignItems={'center'}>
                        <Stack textAlign={'center'}>
                            <Image bottom={{xl:'200px',md:'170px',sm:'115px',base:'80px'}}
                             left={{xl:'75px',md:'55px',sm:'65px',base:'50px' }} 
                             className='imgWeb' src={Web} 
                             height={{xl:'80px', md:'70px',sm:'40px',base:'20px'}} 
                              width= {{xl:'80px',md:'70px',sm:'40px',base:'20px'}}/>
                        </Stack>
                        <CardBody>
                            <Stack textAlign={'center'}>
                                <Heading fontSize={{xl:'20px',md:'15px',sm:'12px',base:'8px'}}>Responsive</Heading>
                            </Stack>
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Entrego las applicaciones webs/paginas webs antes del tiempo estipulado</Text>
                        </CardBody>

                    </Card>
                </Flex>
            </VStack>
        </Stack>

       

    )
}
export default Choose