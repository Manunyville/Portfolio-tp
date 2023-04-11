import './myportfolio.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Card, CardHeader, CardBody,} from '@chakra-ui/react'
import { motion } from "framer-motion"

const Portfolio = () =>{

    return(
        <Container>
            <VStack >
                <VStack>
                    <Text>Recent projects</Text>
                    <Heading>My Portfolio</Heading>
                </VStack>
                <HStack>
                    <Card  marginLeft={5} alignItems={'center'}  bg={'#F9F9F9'} width={600}>
                        <CardHeader>
                            
                        <Heading size='md'> Website design</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create web sites.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card alignItems={'center'} marginLeft={5} bg={'#F9F9F9'} width={600}>
                        <CardHeader>
                       
                        <Heading size='md'>Application desing</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create application as my client wishes.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card bg={'#F9F9F9'}  marginLeft={5} alignItems={'center'} width={600}>
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
export default Portfolio