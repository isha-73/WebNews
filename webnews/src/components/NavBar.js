import React, { Component } from 'react'
import { Box,Flex,Heading,Spacer,Button,ButtonGroup, } from '@chakra-ui/react'


export class NavBar extends Component {
  render() {
    return (
       <Box  position="fixed"
       top="0"
       left="0"
       right="0"
       boxShadow="md"
       height={'60px'}
       >
         <Flex minWidth='max-content' gap='2'>
        <Box p='5'>
          <Heading size='md'>Web-News</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2' p='2'>
          <Button>Home</Button>
          <Button>About</Button>
        </ButtonGroup>
      </Flex>
       </Box>
    )
  }
}

export default NavBar