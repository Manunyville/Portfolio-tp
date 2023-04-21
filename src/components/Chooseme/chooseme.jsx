import './chooseme.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Creativo from '../../assets/img/Ideacreativa.png'
import equipo from '../../assets/img/teamplayer.png'

const Choose = () => {

    return (

        <Stack width={{xl:"full", md:'600px', sm:'300px'}} marginTop="10px" id='eligeme'>
            <VStack width={'1200px'} margin="0 auto" gap="55px" marginTop="10px" marginRight="0 auto" flexDirection={{xl:'column', md:'row',sm:'row'}}>
                <VStack justifyContent={'space-between'} >
                    <Text color={'#0C7FB0'} fontSize={{xl: '15px', md: '10px',sm:'5px' }}>Why you should choose me</Text>
                    <Heading fontSize={{ xl: '20px', md: '10px',sm:'5px' }}>Why choose me</Heading>
                </VStack>
                <Flex gap="85px" flexDirection={{xl:'row', md:'column',sm:'column'}}>
                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    className='cardsCh' bg={'#F9F9F9'} 
                    height={{xl:"220px" ,md:'110px',sm:'65px'}}
                    width={{ xl: '250px'  ,md:'125px',sm:'75px'}}>
                        <Stack>
                            <Image className='imgWeb' 
                            src={equipo} 
                            bottom={{xl:'200px', md:'100px',sm:'65px'}}
                             left={{xl:'75px', md:'45px',sm:'15px'}}
                              height={{xl:'80px',md:'40px',sm:'20px'}} 
                              width= {{xl:'80px',md:'40px',sm:'20px'}}/>
                        </Stack>
                        <CardBody>
                            <Stack marginLeft="50px" paddingY="2px">
                                <Heading size='md'fontSize={{ xl: '20px', md: '10px',sm:'5px' }}> Team player</Heading>
                            </Stack>
                            <Text fontSize={{xl: '15px', md: '10px',sm:'5px' }}>Junto a otros desarrolladores nos divimos las tareas y debatimos ideas para crear una pagina con mayor criterio y objetividad</Text>
                        </CardBody>

                    </Card>
                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }}
                    bg={'#F9F9F9'} 
                    className='cardsCh' 
                    height={{xl:"220px" ,md:'110px',sm:'65px'}}
                    width={{ xl: '250px'  ,md:'125px',sm:'75px'}}>
                        <Stack>
                             <Image  className='imgWeb'
                              src={Creativo}
                              bottom={{xl:'200px', md:'100px',sm:'65px'}}
                             left={{xl:'75px', md:'45px',sm:'15px'}}
                              height={{xl:'80px',md:'40px',sm:'20px'}} 
                              width= {{xl:'80px',md:'40px',sm:'20px'}}/>
                        </Stack>
                        <CardBody>
                            <Stack marginLeft="50px" paddingY="2px">
                                <Heading size='md'fontSize={{ xl: '20px', md: '10px',sm:'5px'}}> Creative design</Heading>
                            </Stack>
                            <Text fontSize={{ xl: '15px', md: '10px',sm:'5px'}}>Desarrollo ideas creativas tanto en el diseño de la applicacion web como en su funcionamiento.</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div}
                     whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    bg={'#F9F9F9'} 
                    className='cardsCh' 
                     height={{xl:"220px" ,md:'110px',sm:'65px'}}
                    width={{ xl: '250px'  ,md:'125px',sm:'75px'}}>
                        <Stack>
                            <Image bottom={{xl:'200px', md:'100px', sm:'65px'}}
                             left={{xl:'75px', md:'45px', sm:'15px'}} 
                             className='imgWeb' src={Web} 
                             height={{xl:'80px',md:'40px',sm:'20px'}} 
                             width= {{xl:'80px',md:'40px', sm:'20px'}}/>
                        </Stack>
                        <CardBody>
                            <Stack marginLeft="50px" paddingY="2px">
                                <Heading size='md' fontSize={{ xl: '20px', md: '10px',sm:'5px' }}>Responsive</Heading>
                            </Stack>
                            <Text fontSize={{ xl: '15px', md: '10px', sm:'5px' }}>Entrego las applicaciones webs/paginas webs antes del tiempo estipulado</Text>
                        </CardBody>

                    </Card>
                </Flex>
            </VStack>
        </Stack>

       

    )
}
export default Choose