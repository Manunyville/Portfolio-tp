import './contact.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image,Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"


const Contact = () =>{

    return(
        <Container>
            <VStack>
                <Text>Have something in your mind?</Text>
                <Heading>Contact me</Heading>
                <form>
                    <label>Full Name </label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                    <label >Message</label>
                    <input type="text" />
                    <Button>Submit</Button>
                </form>
            </VStack>
        </Container>
    )
}
export default Contact