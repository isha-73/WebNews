import { Box, Flex, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";

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
          <Button >Home</Button>
          <Button>About</Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};
export default Navbar;