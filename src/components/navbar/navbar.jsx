import './navbar.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup } from '@chakra-ui/react'

const Navbar = () =>{


    return(
        <>
            <Flex justify={'center'} padding={30} >
                <nav >
                    <HStack gap={500} >
                        <div>
                    <h3>Portfolio</h3>
                        </div>
                        <HStack gap={20}> 
                    <button>Home</button>
                    <button>About</button>
                    <button>Services</button>
                    <button >Portfolio</button>
                    <Button colorScheme='blue'>Contact me</Button>
                        </HStack>
                    </HStack>
                </nav>
            </Flex>
        </>
    )

}
export default Navbar