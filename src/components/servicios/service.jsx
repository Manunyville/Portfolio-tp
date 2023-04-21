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
            <VStack gap={{xl:"15px", md:'10px',sm:'100px',base:'70px'}}> 
                <VStack marginTop="20px">
                    <Text color={'#0C7FB0'} fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Services I provide</Text>
                    <Heading fontSize={{xl:'40px',md:'30px',sm:'20px',base:'10px'}}>My Services</Heading>
                </VStack>
                <HStack  height="300px" 
                width={{xl:"1200px", md:'600px', sm:'450px', base:'220px'}} 
                justify={"space-evenly"}
                flexDirection={{xl:'row', md:'row',sm:'column', base:'column'}}
                gap={{sm:'25px',base:'25px'}}>             
                    <Card  className='cardServ' 
                    bg={'#F9F9F9'} 
                    height="150px" 
                    width={{xl:"220px", md:'150px',sm:'90px',base:'40px'}}>
                        <Stack>
                            <Image  className='webImg' 
                            src={Web}
                            width={{xl:'70px',md:'55px', sm:'35px',base:'15px'}} 
                            height= {{xl:'80px',md:'65px', sm:'45px', base:'25px'}}
                            left={{xl:'75px',md:'50px',sm:'28px',base:'12px'}} 
                            bottom={{xl:'125px',md:'125px',sm:'125px',base:'95px'}}/>
                        </Stack>                     
                        <CardBody>
                        <Heading fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}> Website developement </Heading>
                        <Text  fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Yo transformo ideas complejas en paginas web sencillas de utilizar.</Text>
                        </CardBody>                        
                    </Card>
                    <Card  className='cardServ' 
                    bg={'#F9F9F9'} 
                    height="150px"  
                    width={{xl:"220px", md:'150px',sm:'90px',base:'40px'}}>
                        <Stack>
                            <Image  className='webImg' 
                            src={Diseñoweb}
                            width={{xl:'70px',md:'55px', sm:'35px',base:'15px'}} 
                            height= {{xl:'80px',md:'65px', sm:'45px', base:'25px'}}
                            left={{xl:'75px',md:'50px',sm:'28px',base:'12px'}} 
                            bottom={{xl:'125px',md:'125px',sm:'125px',base:'115px'}}/>
                        </Stack>
                        <CardBody>
                        <Heading fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Website design</Heading>
                        <Text  fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Realizo los de las paginas de acuerdo a lo que el cliente desee. </Text>
                        </CardBody>                     
                    </Card>
                    <Card bg={'#F9F9F9'}  
                    className='cardServ' 
                    height="150px"  
                    width={{xl:"220px", md:'150px',sm:'90px',base:'40px'}} >
                        <Stack>
                            <Image  className='webImg' 
                            src={diseño}
                            width={{xl:'70px',md:'55px', sm:'35px',base:'15px'}} 
                            height= {{xl:'80px',md:'65px', sm:'45px', base:'25px'}}
                            left={{xl:'75px',md:'50px',sm:'28px',base:'12px'}} 
                            bottom={{xl:'125px',md:'125px',sm:'125px',base:'115px'}}/>
                        </Stack>
                        <CardBody>
                            <Heading fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Content creation </Heading>
                            <Text  fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Realizo contenido para marcas con el objetivo de impulsar sus ventas.</Text>
                        </CardBody>                      
                    </Card>
                </HStack>
            </VStack>
        </Container>
    )
}
export default Services