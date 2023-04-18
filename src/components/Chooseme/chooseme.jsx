import './chooseme.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Creativo from '../../assets/img/Ideacreativa.png'
import equipo from '../../assets/img/teamplayer.png'

const Choose = () => {

    return (
        <Container width={1200} padding={10} id='eligeme'>
            <VStack>
                <VStack>
                    <Text color={'#0C7FB0'}>Why you should choose me</Text>
                    <Heading>Why choose me</Heading>
                </VStack>
                <HStack gap={75}>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} marginLeft={5} alignItems={'center'} bg={'#F9F9F9'}  height={220} width={250}>

                        <Image marginLeft={10} className='webImg' src={equipo} />

                        <CardBody>
                            <Stack marginLeft={50} paddingY={2}>
                                <Heading size='md'> Team player</Heading>
                            </Stack>
                            <Text>Junto a otros desarrolladores nos divimos las tareas y debatimos ideas para crear una pagina con mayor criterio y objetividad</Text>
                        </CardBody>

                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} alignItems={'center'} marginLeft={5} bg={'#F9F9F9'}  height={220} width={250}>

                        <Image marginLeft={10} className='webImg' src={Creativo} />

                        <CardBody>
                            <Stack marginLeft={35} paddingY={2}>
                                <Heading size='md'>Creative design</Heading>

                            </Stack>
                            <Text>Desarrollo ideas creativas tanto en el diseño de la applicacion web como en su funcionamiento.</Text>
                        </CardBody>

                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} bg={'#F9F9F9'} marginLeft={5} alignItems={'center'} height={220} width={250}>

                        <Image marginLeft={10} className='webImg' src={Web} />

                        <CardBody>
                            <Stack marginLeft={50} paddingY={2} >
                                <Heading size='md'> Responsive </Heading>

                            </Stack>
                            <Text>Entrego las applicaciones webs/paginas webs antes del tiempo estipulado.</Text>
                        </CardBody>

                    </Card>
                </HStack>
            </VStack>
        </Container>
    )
}
export default Choose