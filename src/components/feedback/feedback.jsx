import './feedback.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image,Card, CardHeader, CardBody, } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/website.png'
import Five from '../../assets/img/fivestars.png'


const Testimonial = () =>{

    return(
    <Container>
        <VStack>
            <VStack>
                <Text color={'#0C7FB0'}>Client's feedback</Text>
                <Heading>Testimonials</Heading>
            </VStack>
            <HStack gap={30}>
            <Card  as={motion.div} whileHover={{ scale:1.1, color:'#0C7FB0' }}marginLeft={5} alignItems={'center'}  bg={'#F9F9F9'} width={250}>
                        <CardHeader>
                            <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'> Camila Moncada</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image src={Five} className='fiveStars'/>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum eligendi accusantium, sunt modi nihil asperiores vitae voluptas eum quia, officiis quae odio ab dolores veritatis vel perferendis. Fugit, illum.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card  marginTop={10} as={motion.div} whileHover={{ scale:1.1, color:'#0C7FB0' }} alignItems={'center'} marginLeft={5} bg={'#F9F9F9'} width={250}>
                        <CardHeader>
                        <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'>Lukas Olthoff</Heading>
                        </CardHeader>
                        <CardBody>
                        <Image src={Five} className='fiveStars'/>

                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse soluta laudantium sed, minima ipsam corrupti tempora delectus, praesentium accusamus dolorum. Delectus saepe, ea beatae aliquid reiciendis doloremque quam mollitia!</Text>
                        </CardBody>
                        
                    </Card>
                    <Card as={motion.div} whileHover={{ scale:1.1, color:'#0C7FB0' }} bg={'#F9F9F9'} j marginLeft={5} alignItems={'center'} width={250}>
                        <CardHeader>
                        <Image marginLeft={10} className='webImg' src={Web}/>
                        <Heading size='md'>Marcos Servezinski </Heading>
                        </CardHeader>
                        <CardBody >
                        <Image src={Five} className='fiveStars' marginLeft={40}/>

                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem praesentium sint sapiente alias libero laborum magnam quasi labore eos provident similique, accusantium nemo inventore repudiandae nulla sunt harum pariatur!</Text>
                        </CardBody>
                        
                    </Card>
            </HStack>
            <VStack>
                <div>aca necesito un carrusel para mas opiniones</div>
                <Button >View all</Button>
            </VStack>
        </VStack>
    </Container>

    )
}
export default Testimonial