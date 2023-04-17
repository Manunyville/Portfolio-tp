import './contact.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image,Card, CardHeader, CardBody, Input} from '@chakra-ui/react'
import { motion } from "framer-motion"



const Contact = () =>{

    return(
        <Container>
            <VStack>
                <Text color={'#0C7FB0'}>Have something in your mind?</Text>
                <Heading>Contact me</Heading>
                <Stack >
                <form>
                    <Stack gap={11} >

                    <Input type="text" variant='filled' borderRadius={0} placeholder='Full name' padding={25} width={450}/>
                    <Input type="text"  variant='filled' borderRadius={0} placeholder='Email'padding={25} width={450}/>
                    <Input type="text" variant='filled' borderRadius={0} placeholder='Message' height={100} width={450}/>
                    <Button marginTop={4} as={motion.button} width={150} whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid' marginLeft={4000}>Submit</Button>
                    </Stack>

                </form>
                </Stack>
            </VStack>
        </Container>
    )
}
export default Contact