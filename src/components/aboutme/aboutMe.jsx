import './aboutMe.css'
import React from 'react'
import { Stack, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react'

import Foto from '../../assets/img/Fotoportfolio.png'

const About = () => {

    return (

        <Stack width='full' id='about' margin="0 auto" bg={'#F9F9F9'} >
            <HStack w={{xl:"1200px",md:'400px',sm:'350px',base:'250px' }}
            gap={{xl:"120px", md:'75px', sm:'45px',base:'15px' }}
            marginLeft={{'2xl':'650px',xl:"120px",md:'110px',sm:'55px',base:'0px'}}
            marginTop="15px" 
            flexDirection={{xl:'row',md:'column',sm:'column',base:'column'}}>


                <HStack >
                    <Image src={Foto} 
                     w={{xl:"500px", md:'250px', sm:'75px', base:'25px'}} 
                    h={{xl:"400px", md:'200px', sm:'65px', base:'15px'}} />
                </HStack>
                <VStack > 
                    <Stack>
                        <Heading fontSize={{xl:'45px',md:'35px',sm:'20px',base:'5px'}}>About me</Heading>
                        <Heading fontSize={{xl:'30px',md:'20px',sm:'10px',base:'5px'}} 
                        color={'#6D7173'}> 02 Meses de experiencia en desarrolo Front end</Heading>
                        <Text color={'#6D7173'} fontSize={{xl:'15px',md:'10px',sm:'8px',base:'5px'}}>Hola, yo soy Manuel, un desarrollador Front end, me encargo del desarrollo de paginas web y aplicaciones web de acuerdo a lo que el cliente proponga. soy creador de contenido, realizo tanto filmaciones como fotografias para la promocion e impulsion de productos, tambien me encargo de la edicion de estos. </Text>
                    </Stack>
                </VStack>


            </HStack>
        </Stack>



    )
}
export default About