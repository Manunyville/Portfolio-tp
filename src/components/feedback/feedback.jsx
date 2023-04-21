import './feedback.css'
import React from 'react'
import { Stack, HStack, VStack, Button, Text, Heading, Image, Card, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Five from '../../assets/img/fivestars.png'
import Comillas from '../../assets/img/comillas.png'
import Azul from '../../assets/img/imgabstractaizquierda.png'
import marcos from '../../assets/img/Marcos.jpg'
import lukas from '../../assets/img/Lukas.jpg'
import cami from '../../assets/img/Camila.jpeg'



const Testimonial = () => {

    return (

        <Stack id='testimonios' width={'full'} margin="0 auto">
            <VStack gap="45px" marginLeft="70px">
                <VStack>
                    <Text color={'#0C7FB0'} 
                    fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}
                    marginTop="20px">Client's feedback</Text>
                    <HStack>
                        <Image src={Azul} className='imgabstractaFeed' />
                    </HStack>
                    <Stack>
                        <Heading fontSize={{xl:'25px',md:'20px',sm:'15px',base:'12px'}}>Testimonials</Heading>
                    </Stack>
                </VStack>
                <HStack gap="30px" 
                className='stackFeed' 
                marginLeft="45px" 
                margin="0 auto"
                flexDirection={{xl:'row',md:'row',sm:'column',base:'column'}}>
                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    className='cardsFeedback' 
                    bg={'#F9F9F9'} 
                    width={{xl:'300px',md:'250px',sm:'200px',base:'170px'}} 
                    height={{xl:'300px',md:'250px',sm:'200px',base:'170px'}}
                    >
                        <HStack gap={10}>
                            <Image className='imgFeed' 
                            src={cami} 
                            width= {{xl:'70px',md:'40px',sm:'30px',base:'20px'}}
                            height= {{xl:'80px',md:'50px',sm:'30px',base:'20px'}} 
                            left= {{xl:'115px',md:'100px',sm:'80px',base:'75px'}}
                            bottom= {{xl:'250px',md:'225px', sm:'185px',base:'165px'}}/>
                            <Image src={Comillas} 
                            w={{xl:'100px', md:'80px',sm:'60px',base:'30px'}} 
                            className='comillasfeed' />
                        </HStack>
                        <CardBody className='cardsFeedback' >
                            <Heading fontSize={{xl:'20px',md:'15px',sm:'12px',base:'8px'}}> Camila Moncada</Heading>
                            <Image src={Five} 
                            className='fiveStars' 
                            width= {{xl:'90px',md:'70px',sm:'40px',base:'20px'}}
                            height={{xl:' 50px'}}
                           marginLeft= {{xl:'75px',md:'65px',sm:'55px',base:'45px'}}
                           />
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Manuel realiza trabajos muy buenos, todos fueron entregados en tiempo y forma; ademas trabaja muy bien con su equipo, sin duda volveria a contratarlos</Text>
                        </CardBody>
                    </Card>

                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    className='cardsFeedback' 
                    bg={'#F9F9F9'} 
                    width={{xl:'300px',md:'250px',sm:'200px',base:'170px'}} 
                    height={{xl:'300px',md:'250px',sm:'200px',base:'170px'}}>
                        <HStack >
                            <Image className='imgFeed' 
                            src={lukas} 
                            width= {{xl:'70px',md:'40px',sm:'30px',base:'20px'}}
                            height= {{xl:'80px',md:'50px',sm:'30px',base:'20px'}} 
                            left= {{xl:'115px',md:'100px',sm:'80px',base:'75px'}}
                            bottom= {{xl:'250px',md:'225px', sm:'185px',base:'165px'}}/>
                            <Image src={Comillas} 
                            w={{xl:'100px', md:'80px',sm:'60px',base:'30px'}} 
                            className='comillasfeed'/>
                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading fontSize={{xl:'20px',md:'15px',sm:'12px',base:'8px'}}>Lucas Quintero</Heading>
                            <Image src={Five} 
                            className='fiveStars' 
                            width= {{xl:'90px',md:'70px',sm:'40px',base:'20px'}}
                            height={{xl:' 50px'}}
                            marginLeft= {{xl:'75px',md:'65px',sm:'55px',base:'45px'}} />
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Manuel se encargo de la promocion de mis productos materos y se dispararon las ventas!</Text>
                        </CardBody>
                    </Card>

                    <Card as={motion.div} 
                    whileHover={{ scale: 1.1, color: '#0C7FB0' }} 
                    bg={'#F9F9F9'} 
                    className='cardsFeedback' 
                    width={{xl:'300px',md:'250px',sm:'200px',base:'170px'}} 
                    height={{xl:'300px',md:'250px',sm:'200px',base:'170px'}}>
                        <HStack >
                            <Image className='imgFeed' 
                            src={marcos}
                            width= {{xl:'70px',md:'40px',sm:'30px',base:'20px'}}
                            height= {{xl:'80px',md:'50px',sm:'30px',base:'20px'}} 
                            left= {{xl:'115px',md:'100px',sm:'80px',base:'75px'}}
                            bottom= {{xl:'250px',md:'225px', sm:'185px',base:'165px'}}/>
                            <Image src={Comillas} 
                            w={{xl:'100px', md:'80px',sm:'60px',base:'30px'}} 
                            className='comillasfeed' />

                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading fontSize={{xl:'20px',md:'15px',sm:'12px',base:'8px'}}>Marcos Servezynski </Heading>
                            <Image src={Five} 
                            className='fiveStars' 
                            width= {{xl:'90px',md:'70px',sm:'40px',base:'20px'}}
                            height={{xl:' 50px'}}
                            marginLeft= {{xl:'75px',md:'65px',sm:'55px',base:'45px'}} />
                            <Text fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Los trabajos que Manuel ha hecho son muy ingeniosos, las ideas que yo le dije el las tranformo tal cual yo me las imaginaba!</Text>
                        </CardBody>
                    </Card>

                </HStack>
                <VStack gap="8px">
                    <HStack justify={'space-around'}>

                        <Button as={motion.button} 
                        borderRadius='50%' 
                        bg={'#F9F9F9'} 
                        size='xs' 
                        whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                        <Button as={motion.button} 
                        borderRadius='50%' 
                        bg={'#F9F9F9'} 
                        size='xs' 
                        whileHover={{ backgroundColor: '#0C7FB0' }}> </Button>
                        <Button as={motion.button} 
                        borderRadius='50%' 
                        bg={'#F9F9F9'} 
                        size='xs' 
                        whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                    </HStack>
                    <VStack>
                        <Button marginTop='4px' 
                        as={motion.button} 
                        paddingX='10px' 
                        whileHover={{ color: '#0C7FB0' }} 
                        color={'#F9F9F9'} 
                        bg={'#0C7FB0'} 
                        variant='solid'>View all</Button>
                    </VStack>
                </VStack>
            </VStack>
        </Stack >

    )
}
export default Testimonial