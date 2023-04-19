import './chooseme.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Creativo from '../../assets/img/Ideacreativa.png'
import equipo from '../../assets/img/teamplayer.png'

const Choose = () => {

    return (

        <Stack width="full">
            <VStack width="1200px" margin="0 auto" gap="65px"  marginTop="10px">
                <VStack justifyContent={'space-between'} marginTop="10px">
                    <Text color={'#0C7FB0'}>Why you should choose me</Text>
                    <Heading>Why choose me</Heading>
                </VStack>
                <HStack gap="85px">
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} className='cardsCh' bg={'#F9F9F9'} height="220px" width="250px">
                        <Stack>
                            <Image className='webImg' src={equipo}  />
                        </Stack>
                        <CardBody>
                            <Stack marginLeft="50px" paddingY="2px">
                                <Heading size='md'> Team player</Heading>
                            </Stack>
                            <Text>Junto a otros desarrolladores nos divimos las tareas y debatimos ideas para crear una pagina con mayor criterio y objetividad</Text>
                        </CardBody>

                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} bg={'#F9F9F9'} className='cardsCh' height="220px" width="250px">
                        <Stack>
                             <Image  className='webImg' src={Creativo} />
                        </Stack>
                        <CardBody>
                            <Stack marginLeft="50px" paddingY="2px">
                                <Heading size='md'> Creative design</Heading>
                            </Stack>
                            <Text>Desarrollo ideas creativas tanto en el diseño de la applicacion web como en su funcionamiento.</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} bg={'#F9F9F9'} className='cardsCh' height="220px" width="250px">
                        <Stack>
                            <Image  className='webImg' src={Web} />
                        </Stack>
                        <CardBody>
                            <Stack marginLeft="50px" paddingY="2px">
                                <Heading size='md'>Responsive</Heading>
                            </Stack>
                            <Text>Entrego las applicaciones webs/paginas webs antes del tiempo estipulado</Text>
                        </CardBody>

                    </Card>
                </HStack>
            </VStack>
        </Stack>

    )
}
export default Choose