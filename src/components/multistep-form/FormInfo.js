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
    <>
      <Text>
        This form takes about {time} to complete.
      </Text>
      <Box>
        <Heading as='h3' size='sm'>
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
    </>
  )
}

export default FormInfo