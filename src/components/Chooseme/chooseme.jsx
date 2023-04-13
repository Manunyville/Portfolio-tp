import './chooseme.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image,Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'


const Choose = () =>{

    return(
        <Container width={1200} padding={10}>
            <VStack>
                <VStack>
                    <Text color={'#0C7FB0'}>Why you should choose me</Text>
                    <Heading>Why choose me</Heading>
                </VStack>
                <HStack gap={75}>
                <Card  as={motion.div} whileHover={{ scale:1.1, color:'#0C7FB0' }}marginLeft={5} alignItems={'center'}  bg={'#F9F9F9'} width={250}>
                        <CardHeader>
                            <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'> Team player</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create web sites.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card as={motion.div} whileHover={{ scale:1.1, color:'#0C7FB0' }} alignItems={'center'} marginLeft={5} bg={'#F9F9F9'} width={250}>
                        <CardHeader>
                        <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'>Creative design</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create application as my client wishes.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card as={motion.div} whileHover={{ scale:1.1, color:'#0C7FB0' }} bg={'#F9F9F9'}  marginLeft={5} alignItems={'center'} width={250}>
                        <CardHeader>
                        <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'> Responsive </Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create Dashboard design.</Text>
                        </CardBody>
                        
                    </Card>
                </HStack>
            </VStack>
        </Container>
    )
}
export default Choose