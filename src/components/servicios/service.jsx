import './service.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'

const Services = () =>{
 

    return(
        <Container width={1200}>
            <VStack>
                <VStack marginTop={20}>
                    <Text>Services I provide</Text>
                    <Heading>My Services</Heading>
                </VStack>
                <HStack height={400} width={1000} gap={5}>
                    <Card justify={'center'} bg={'#F9F9F9'} width={600}>
                        <CardHeader>
                            <Image className='webImg' src={Web}/>
                        <Heading size='md'> Website design</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create web sites.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card justify={'center'} bg={'#F9F9F9'} width={600}>
                        <CardHeader>
                        <Image className='webImg' src={Web}/>
                        <Heading size='md'>Application desing</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create application as my client wishes.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card bg={'#F9F9F9'} justify={'center'} alignItems={'center'} width={600}>
                        <CardHeader>
                        <Image className='webImg' src={Web}/>
                        <Heading size='md'> Dashboard design</Heading>
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
export default Services