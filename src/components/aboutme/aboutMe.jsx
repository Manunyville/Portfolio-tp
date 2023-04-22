import './aboutMe.css'
import React from 'react'
import { Stack, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react'

import Foto from '../../assets/img/Fotoportfolio.png'

const About = () => {

    return (

        <Stack id='about' bg={'#F9F9F9'} width={'full'} paddingY={10}>
            <Stack justifyContent={{base:'center', md: 'space-evenly'}} alignItems={'center'} direction={{base:'column', md:'row'}}>
                <Stack>
                    <Image src={Foto}
                        width={{ base:'165px',md: '225px', lg: '350px' }}
                        height={{base:'165px', md: '225px', lg: '350px' }} />
                </Stack>
                <Stack w={{base:'80%',md:'40%'}} textAlign={'start'} direction={'column'} >
                    <Heading fontSize={{ base: '20px', md:'25px' }} textAlign={{base:'center', md:'start'}}>About me</Heading>
                    <Heading fontSize={{ base:'16px', md:'20px' }}
                        color={'#6D7173'}> 02 Meses de experiencia en desarrolo Front end</Heading>
                    <Text color={'#6D7173'} fontSize={{ base: '15px', md:'20' }}>Hola, yo soy Manuel, un desarrollador Front end, me encargo del desarrollo de paginas web y aplicaciones web de acuerdo a lo que el cliente proponga. soy creador de contenido, realizo tanto filmaciones como fotografias para la promocion e impulsion de productos, tambien me encargo de la edicion de estos. </Text>
                </Stack>
            </Stack>
        </Stack>



    )
}
export default About