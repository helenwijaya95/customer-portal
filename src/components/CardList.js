import { Box, Flex, Text } from "@chakra-ui/react"

const CardList = ({ dataList, isOwned }) => {
  return (
    <Flex flexWrap='wrap' w='100%'>
      {
        dataList.map((data, idx) => {
          return (
            <Box key={idx} className='card' bg={isOwned ? '#eaf8ff' : 'white'} >
              <Flex >
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
    </Flex >
  )


}

export default CardList
