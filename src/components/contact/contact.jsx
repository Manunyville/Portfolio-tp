import './contact.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, Input, Textarea } from '@chakra-ui/react'
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import Azul from '../../assets/img/imgabstractaderecha.png';




const Contact = () => {
    function ContactForm() {
        const [state, handleSubmit] = useForm("mzbqknje");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }
        return (
            <form action="https://formspree.io/f/mzbqknje" onSubmit={handleSubmit}>
                <VStack gap='15px'>
                    <Input
                        id="text"
                        type="text"
                        name="text"
                        variant='filled'
                        borderRadius='5px'
                        placeholder='Full name'
                        padding='25px'
                        width='450px'
                    />
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        variant='filled'
                        borderRadius='5px'
                        placeholder='Email'
                        padding='25px'
                        width='450px'
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
                        borderRadius='5px'
                        placeholder='Message'
                        height='100px'
                        width='450px'

                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </VStack>
                <VStack justify={'center'} marginTop='15px'>
                    <Button type="submit" disabled={state.submitting}
                        
                        as={motion.button}
                        width='150px'
                        whileHover={{ color: '#0C7FB0' }}
                        color={'#F9F9F9'}
                        bg={'#0C7FB0'}
                        variant='solid'>
                        
                        Submit
                    </Button>
                </VStack>
            </form>
        );
    }
    return (
        <Container id='contact'width='full'>
            <VStack gap='20px'>
                <Text color={'#0C7FB0'}>Have something in your mind?</Text>
                <Heading>Contact me</Heading>
                <Stack >
                    <ContactForm />

                </Stack>
            </VStack>
        </Container>
    )
}
export default Contact