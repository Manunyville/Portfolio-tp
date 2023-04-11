import './service.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'

const Services = () =>{
 

    return(
        <Container width={1200}>
            <VStack>
                <VStack marginTop={10}>
                    <Text color={'#0C7FB0'}>Services I provide</Text>
                    <Heading>My Services</Heading>
                </VStack>
                <HStack height={300} width={1000} gap={5}>
                    <Card  marginLeft={5} alignItems={'center'}  bg={'#F9F9F9'} width={600}>
                        <CardHeader>
                            <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'> Website design</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create web sites.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card alignItems={'center'} marginLeft={5} bg={'#F9F9F9'} width={600}>
                        <CardHeader>
                        <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'>Application desing</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create application as my client wishes.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card bg={'#F9F9F9'}  marginLeft={5} alignItems={'center'} width={600}>
                        <CardHeader>
                        <Image marginLeft={10} className='webImg' src={Web}/>
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