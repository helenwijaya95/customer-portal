import { Center, Spinner, Text } from "@chakra-ui/react";

const Loader = ({ text }) => {
  return (
    <Center flexDirection='column' w='100%' h='100%'>
      <Spinner
        m='auto'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      <Text mt='10px'>{text}</Text>
    </Center>
  )
}

export default Loader;