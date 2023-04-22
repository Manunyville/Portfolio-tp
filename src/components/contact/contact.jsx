import './contact.css'
import React from 'react'
import { Stack, VStack, Button, Text, Container, Heading, Image, Input } from '@chakra-ui/react'
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
                        width={{base:'250px',md:'450px'}}
                    />
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        variant='filled'
                        borderRadius='5px'
                        placeholder='Email'
                        padding='25px'
                        width={{base:'250px',md:'450px'}}
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
                        width={{base:'250px',md:'450px'}}

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
                        width={{base:'85px',md:'150px'}}
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
        <Stack id='contact' w='full'>
            <VStack marginTop="20px" >
                <Text color={'#0C7FB0'}>Have something in your mind?</Text>
                <Stack w="full" align={'end'}>
                        <Image src={Azul}  h={'70px'} w={'50px'}/>
                    </Stack>
                <Heading>Contact me</Heading>
                <Stack >
                    <ContactForm />

                </Stack>
            </VStack>
        </Stack>
    )
}
export default Contact