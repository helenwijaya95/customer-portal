import { useEffect, useState } from "react"

const { Box, Text, Heading, Flex, Button, Center } = require("@chakra-ui/react")

const TransactionList = ({ data }) => {
  const [defaultData, setDefaultData] = useState([])
  useEffect(() => {
    setDefaultData(data)
    console.log(defaultData)
  }, [defaultData])

  return (
    <Box>
      {
        defaultData.map((trans, idx) => {
          return (
            <Flex key={idx} justifyContent='center' >
              <Box w='400px' className='trans-copy-wrapper' p='25px' borderLeft='3px solid #8ec9ec'>
                <Text fontSize='13px'>{trans.date}</Text>
                <Heading as='h3' size='sm'>{trans.type}</Heading>
                <Text>{trans.category}</Text>
              </Box>
              <Center>
                <Button size='sm'>Show details</Button>
              </Center>
            </Flex>
          )
        })
      }
    </Box >
  )

}

export default TransactionList

