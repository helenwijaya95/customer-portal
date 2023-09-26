'use client'
import { Button, List, Text, ListItem, ListIcon, Box, Heading, Flex } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRouter, usePathname } from "next/navigation";

const FormInfo = ({ time, requirements, actionList }) => {
  const { push } = useRouter()
  const pathname = usePathname()

  const handleClick = (redirectURL, callback) => {
    if (redirectURL) {
      const fullPath = pathname + redirectURL
      redirectURL && push(fullPath)
    }
    callback && callback()
  }
  return (
    <Box className='form-info'>
      <Text>
        This form takes about {time} to complete.
      </Text>
      <Box mb='25px'>
        <Heading as='h3' mt = '10px' size='md'>
          You will need:
        </Heading>
        {
          requirements && requirements.length > 0 ?
            (
              <List spacing={3}>
                {
                  requirements.map((reqItem, idx) => (
                    <ListItem key={idx}>
                      <ListIcon as={CheckIcon} color='green.500' />
                      {reqItem}
                    </ListItem>
                  ))
                }
              </List>
            ) : <>-</>
        }
      </Box>
      {/* action group section */}
      {
        actionList && actionList.length > 0 &&
        (
          <Flex justifyContent='space-between'>
            {
              actionList.map((action, idx) => (
                <Button key={idx} onClick={() => { handleClick(action.redirect, action.actionFunc) }}>{action.text}</Button>
              ))
            }
          </Flex>
        )
      }
    </Box>
  )
}

export default FormInfo