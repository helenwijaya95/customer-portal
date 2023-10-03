import { Box, Flex, Heading, Text, Container, Link } from "@chakra-ui/react";

const Footer = ({ list }) => {
  return (
    <footer>
      <Container >
        <Flex className='footer-wrapper' justifyContent="space-between" >
          {
            list.map((item, idx) => (
              <Flex key={idx} mt='10px'>
                <Box>
                  <Link href="#">
                    <Heading as='h4' size='sx'>
                      {item.header}
                    </Heading>
                  </Link>

                  <Box>
                    {
                      (item.children && item.children.length > 0)
                      && item.children.map((child, i) => {
                        return (
                          <Text fontSize="14px" key={i}>
                            <Link color='white'>{child}</Link>
                          </Text>
                        )
                      }
                      )
                    }
                  </Box>
                </Box>
              </Flex>
            ))
          }

        </Flex>
      </Container>

    </footer>
  )
}

export default Footer;