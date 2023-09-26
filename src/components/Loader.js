import { Box, Center, Spinner, Text } from "@chakra-ui/react";

const Loader = ({ text }) => {
  return (
    <Center flexDirection='column' >
      <Spinner
        m='auto'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      <Box>
        <Text mt='10px'>{text}</Text>
      </Box>
    </Center>
  )
}

export default Loader;