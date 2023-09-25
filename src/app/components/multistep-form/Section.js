'use client'
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { useRouter } from 'next/navigation'

export const Section = ({ title, children, url }) => {
  const { push } = useRouter();
  return (
    <Box m='10px 0 15px'>
      <Flex justifyContent='space-between'>
        <Heading as='h4' size="md">{title}</Heading>
        <Button colorScheme='blue' onClick={() => push(url)}>Edit</Button>
      </Flex>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

export const SectionRow = ({ children }) => {
  return <Box >{children}</Box>;
};
