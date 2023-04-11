import './service.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from "framer-motion"

const Services = () =>{
 

    return(
        <Container>
            <VStack>
                <VStack>
                    <Text>Services I provide</Text>
                    <Heading>My Services</Heading>
                </VStack>
                <HStack>
                    <Card>
                        <CardHeader>
                        <Heading size='md'> Website design</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create web sites.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card>
                        <CardHeader>
                        <Heading size='md'>Application desing</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create application as my client wishes.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card>
                        <CardHeader>
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