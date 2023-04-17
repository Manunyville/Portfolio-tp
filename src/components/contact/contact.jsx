import './contact.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, Input,Textarea } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
    function ContactForm() {
        const [state, handleSubmit] = useForm("mzbqknje");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }
        return (
            <form action="https://formspree.io/f/mzbqknje" onSubmit={handleSubmit}>
            <VStack>
            <Input
                    id="text"
                    type="text"
                    name="text"
                    variant='filled' 
                    borderRadius={5}
                    placeholder='Full name'
                    padding={25}
                    width={450}
                />
                <Input
                    id="email"
                    type="email"
                    name="email"
                    variant='filled' 
                    borderRadius={5}
                    placeholder='Email'
                    padding={25}
                    width={450}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                /> 
                <Input
                    id="message"
                    name="message"
                    variant='filled'
                    borderRadius={5}
                    placeholder='Message'
                    height={100} 
                    width={450}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    />
            </VStack>
            <VStack justify={'center'}>
                <Button type="submit" disabled={state.submitting}
                marginTop={4}
                as={motion.button}
                width={150} 
                whileHover={{ color: '#0C7FB0' }} 
                color={'#F9F9F9'} 
                bg={'#0C7FB0'} 
                variant='solid'
                justifyContent={'center'}>
                    Submit
                </Button>
            </VStack>    
            </form>
        );
    }
    return (
        <Container id='contact'>
            <VStack>
                <Text color={'#0C7FB0'}>Have something in your mind?</Text>
                <Heading>Contact me</Heading> 
                    <Stack gap={11} >
                        <ContactForm/>
                    </Stack>
            </VStack>
        </Container>
    )
}
export default Contact