import { Box, Flex, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <Flex
      as="nav"
      
      justify="space-between"
      wrap="wrap"
      padding={4}
     
      color="white"
    >
      <Box p={{ base: 2, md: 5 }}>
        <Heading size="md">Web-News</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        <ButtonGroup gap="2" p="3" variant={'unstyled'}>
          
          <Link to='/business' ><Button>Business</Button></Link>
          <Link to='/science'><Button>Science</Button></Link> 
          <Link to='/enterntainent'><Button>Entertainment</Button></Link>
          <Link to='/general'><Button>General</Button></Link>
          <Link to='/health'><Button>Health</Button></Link>
          <Link to='/technology'><Button>Technology</Button></Link>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};
export default Navbar;