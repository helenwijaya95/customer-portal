import CardList from "@/components/CardList"
import { Box, Heading } from "@chakra-ui/react"
const COVERAGE_DATA = [
  {
    heading: 'Clinical',
    subheading: 'Medical Protection',
    bodyText1: 'Policy Number: 1111',
    bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024',
  },
  {
    heading: 'Dental',
    subheading: 'Medical Protection',
    bodyText1: 'Policy Number: 2222',
    bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024',
  },
]
const NEW_COVERAGE = [
  {
    heading: 'Clinical',
    subheading: 'Medical Protection',
    bodyText1: 'Policy Number: 1111',
    bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024',
  },
  {
    heading: 'Dental',
    subheading: 'Medical Protection',
    bodyText1: 'Policy Number: 2222',
    bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024',
  },
  {
    heading: 'Dental',
    subheading: 'Medical Protection',
    bodyText1: 'Policy Number: 2222',
    bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024',
  },
  {
    heading: 'Dental',
    subheading: 'Medical Protection',
    bodyText1: 'Policy Number: 2222',
    bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024',
  },
]
const MyCoverage = () => {
  return (
    <Box>
      <CardList isOwned={true} dataList={COVERAGE_DATA} ></CardList>
      <Heading mt='20px'>New Products</Heading>
      <CardList isOwned={false} dataList={NEW_COVERAGE} ></CardList>
    </Box>

  )
}

export default MyCoverage