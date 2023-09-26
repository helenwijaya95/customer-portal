import { Box, Flex, Text } from "@chakra-ui/react"

const CardList = ({ dataList }) => {
  return (
    <Flex>
      {
        dataList.map((data, idx) => {
          return (
            <Box key={idx} borderTop='3px solid #8ec9ec' p='20px 15px' w='50%' bg='#eaf8ff' m='5px' boxShadow='2px 2px 5px 1px #dceaf1'>
              <Flex>
                <Box className="head" mr='15px' >
                  <Text className='card-heading'>{data.heading}</Text>
                  <Text className='card-subheading'>{data.subheading}</Text>
                </Box>
                <Box className="body">
                  <Text >{data.bodyText1}</Text>
                  <Text >{data.bodyText2}</Text>
                </Box>
              </Flex>
            </Box>
          )
        })
      }
    </Flex>
  )


}

export default CardList
