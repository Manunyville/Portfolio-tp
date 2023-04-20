import './service.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/codigoweb.png'
import diseño from '../../assets/img/Diseñodepagina.png'
import Diseñoweb from '../../assets/img/desarrolloweb.png'

const Services = () =>{
 

    return(
        
        <Container width="full" id='misServicios'>
            <VStack gap="15px"> 
                <VStack marginTop="20px">
                    <Text color={'#0C7FB0'}>Services I provide</Text>
                    <Heading>My Services</Heading>
                </VStack>
                <HStack  height="300px" width="1200px" justify={"space-evenly"}>             
                    <Card  className='cardServ' bg={'#F9F9F9'} height="150px" width="220px">
                        <Stack>
                            <Image  className='webImg' src={Web}/>
                        </Stack>                     
                        <CardBody>
                        <Heading size='md'> Website developement </Heading>
                        <Text>Yo transformo ideas complejas en paginas web sencillas de utilizar.</Text>
                        </CardBody>                        
                    </Card>
                    <Card  className='cardServ' bg={'#F9F9F9'} height="150px" width="220px">
                        <Stack>
                            <Image  className='webImg' src={Diseñoweb}/>
                        </Stack>
                        <CardBody>
                        <Heading size='md'>Website design</Heading>
                        <Text>Realizo los de las paginas de acuerdo a lo que el cliente desee. </Text>
                        </CardBody>                     
                    </Card>
                    <Card bg={'#F9F9F9'}  className='cardServ' height="150px" width="220px" >
                        <Stack>
                            <Image  className='webImg' src={diseño}/>
                        </Stack>
                        <CardBody>
                            <Heading size='md'>Web manteinance </Heading>
                            <Text>Realizo actividades de mantenimiento para optimizar el funcionamiento.</Text>
                        </CardBody>                      
                    </Card>
                </HStack>
            </VStack>
        </Container>
    )
}
export default Services