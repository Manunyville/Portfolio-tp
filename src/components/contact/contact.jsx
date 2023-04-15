import './contact.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image,Card, CardHeader, CardBody, Input} from '@chakra-ui/react'
import { motion } from "framer-motion"



const Contact = () =>{

    return(
        <Container>
            <VStack>
                <Text>Have something in your mind?</Text>
                <Heading>Contact me</Heading>
                <Stack >
                <form>
                    <Stack gap={11}>

                    <Input type="text" variant='filled' placeholder='Full name' padding={25} width={450}/>
                    <Input type="text"  variant='filled' placeholder='Email'padding={25} width={450}/>
                    <Input type="text" variant='filled' placeholder='Message' height={100} width={450}/>
                    </Stack>

                </form>
                </Stack>
            </VStack>
        </Container>
    )
}
export default Contact