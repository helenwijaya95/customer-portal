'use client'
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { useRouter } from 'next/navigation'

export const Section = ({ title, children, url }) => {
  const { push } = useRouter();
  return (
    <Box m='25px 0' p='20px 0' borderTop='1px solid #dde3e8' className="info-section">
      <Flex justifyContent='space-between'>
        <Heading as='h4' size="md">{title}</Heading>
        <Button colorScheme='blue' onClick={() => push(url)}>Edit</Button>
      </Flex>
      <Box>
        {children}
      </Box>
    </Box >
  )
}

export const SectionRow = ({ children }) => {
  return <Box >{children}</Box>;
};
