import { Box, Flex, Heading, Spacer, ButtonGroup, Button,Collapse,IconButton } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 
  };
  return (
    <Flex
      as="nav"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      wrap="wrap"
      padding={4}
      color="white"
     
      
    >
      <Box p={{ base: 2, md: 5 }}>
        <Heading size="md">Web-News</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="unstyled"
          onClick={toggleMenu}
        />
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }} >
        <ButtonGroup gap="2" p="3" variant={'unstyled'}>
          
          <Link to='/'><Button>General</Button></Link>
          <Link to='/business' ><Button>Business</Button></Link>
          <Link to='/science'><Button>Science</Button></Link> 
          <Link to='/entertainment'><Button>Entertainment</Button></Link>
          <Link to='/health'><Button>Health</Button></Link>
          <Link to='/technology'><Button>Technology</Button></Link>
        </ButtonGroup>
      </Box>
      <Spacer />
      
      <Collapse in={isMenuOpen} animateOpacity>
        <Box p="4" bg="gray.800" textAlign="center">
          <ButtonGroup direction="column" gap="2" p="3" variant="unstyled">
          <Flex direction="column"  >
            <Link to='/'><Button onClick={toggleMenu}>General</Button></Link>
            <Link to='/business'><Button onClick={toggleMenu}>Business</Button></Link>
            <Link to='/science'><Button onClick={toggleMenu}>Science</Button></Link>
            <Link to='/entertainment'><Button onClick={toggleMenu}>Entertainment</Button></Link>
            <Link to='/health'><Button onClick={toggleMenu}>Health</Button></Link>
            <Link to='/technology'><Button onClick={toggleMenu}>Technology</Button></Link>
            </Flex>
          </ButtonGroup>
        </Box>
       
      </Collapse>
    </Flex>
  );
};
export default Navbar;