import './navbar.css'
import React from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const Navbar = () =>{


    return(
        <>
            <HStack>
                <nav>
                    <h3>Portfolio</h3>
                    <button>Home</button>
                    <button>About</button>
                    <button>Services</button>
                    <button>Portfolio</button>
                    <button>Contact Me</button>
                </nav>
            </HStack>
        </>
    )

}
export default Navbar