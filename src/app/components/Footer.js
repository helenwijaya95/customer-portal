import { Box, Center, Flex, Heading, Text, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Container >
        <Flex justifyContent="space-between" >
          <Center>
            <Box>
              <Heading as='h4' size='sm'>
                Contact
              </Heading>
              <Text>
                1234-5678
              </Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Heading as='h4' size='sm'>
                About
              </Heading>
              <Text>
                1234-5678
              </Text>
            </Box>
          </Center>
          <Center>
            <Box>
              <Heading as='h4' size='sm'>
                Explore
              </Heading>
              <Text>
                1234-5678
              </Text>
            </Box>
          </Center>
        </Flex>
      </Container>

    </footer>
  )
}

export default Footer;