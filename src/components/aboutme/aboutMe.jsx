import './aboutMe.css'
import React from 'react'
import { Stack, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react'

import Foto from '../../assets/img/Fotoportfolio.png'

const About = () => {

    return (

        <Stack id='about' bg={'#F9F9F9'}>
            <HStack
              

                gap={{ xl: "40px", md: '75px', sm: '45px', base: '15px' }}
                marginLeft={{ '2xl': '50px', xl: "40px", md: '110px', sm: '55px', base: '0px' }}
                marginTop="15px"
                flexDirection={{ xl: 'row', md: 'row', sm: 'column', base: 'column' }}>


                <HStack
                    width={{ '2xl': 'full', xl: "1200px", md: '800px', sm: '450px', base: '250px' }}
                    justify={'center'}>
                    <Image src={Foto}
                        w={{ xl: "200px", md: '150px', sm: '125px', base: '55px' }}
                        h={{ xl: "200px", md: '150px', sm: '65px', base: '15px' }} />
                </HStack>
                <VStack
                    justify={'center'}
                    textAlign={'start'}>
                    <Stack
                        marginRight={{ xl: '110px' }}
                    >
                        <Heading fontSize={{ xl: '45px', md: '35px', sm: '20px', base: '5px' }}>About me</Heading>
                        <Heading fontSize={{ xl: '30px', md: '20px', sm: '10px', base: '5px' }}
                            color={'#6D7173'}> 02 Meses de experiencia en desarrolo Front end</Heading>
                        <Text color={'#6D7173'} fontSize={{ xl: '15px', md: '10px', sm: '8px', base: '5px' }}>Hola, yo soy Manuel, un desarrollador Front end, me encargo del desarrollo de paginas web y aplicaciones web de acuerdo a lo que el cliente proponga. soy creador de contenido, realizo tanto filmaciones como fotografias para la promocion e impulsion de productos, tambien me encargo de la edicion de estos. </Text>
                    </Stack>
                
                </VStack>


            </HStack>
        </Stack >



    )
}
export default About