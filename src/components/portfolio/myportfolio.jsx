import './myportfolio.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, Image, Text, Container, Heading, Card, CardHeader, CardBody, CardFooter,} from '@chakra-ui/react'
import { motion } from "framer-motion"
import Fotaki from '../../assets/img/fotoabout.png'


const Portfolio = () =>{

    return(
        <Container width={1200} id='proyectos'>
            <VStack >
                <VStack>
                    <Text color={'#0C7FB0'}>Recent projects</Text>
                    <Heading>My Portfolio</Heading>
                </VStack>
                <HStack>
                    <Card width={300} height={350} bg={'#F9F9F9'} marginLeft={10}>
                        <CardHeader>
                        <Image src={Fotaki} height={150}/>
                        <Heading size='md'> Twitter clon</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>Is a Twitter profile as you were Messi</Text>
                            <Button  marginTop={10} as={motion.button} paddingX={20} whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                        </CardBody>
                       
                        
                    </Card>
                    <Card width={300} height={350} bg={'#F9F9F9'} marginLeft={10}>
                        <CardHeader>
                        <Image src={Fotaki} height={150}/>
                        <Heading size='md'> Forniture web</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create a web page for a forniture market</Text>
                            <Button marginTop={4} as={motion.button} paddingX={20} whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                        </CardBody>
                       
                        
                    </Card>
                    <Card width={300} height={350} bg={'#F9F9F9'} marginLeft={10}>
                        <CardHeader>
                        <Image src={Fotaki} height={150}/>
                        <Heading size='md'> Hotel page</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text>I create a page design for a hotel in Mar del plata.</Text>
                            <Button marginTop={4} as={motion.button} paddingX={20} whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                        </CardBody> 
                        
                    </Card>
                </HStack>
                <Stack>
                    <Button marginTop={4} as={motion.button} paddingX={10} whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'> View All</Button>
                </Stack>
            </VStack>
        </Container>
    )
}
export default Portfolio