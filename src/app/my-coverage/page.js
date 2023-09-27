import CardList from "@/components/CardList"
import { Box, Heading } from "@chakra-ui/react"
const COVERAGE_DATA = [
  {
    subheading: 'Clinical',
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
    subheading: 'Clinical',
    heading: 'Life Shield Plus',
    bodyText1: 'Policy Period: 5 years',
  },
  {
    subheading: 'Clinical',
    heading: 'Life Shield Lite',
    bodyText1: 'Policy Period: 2 yeas',
  },
  {
    subheading: 'Clinical',
    heading: 'Life Shield Pro',
    bodyText1: 'Policy Period: 6 months',
  },
  {
    subheading: 'Clinical',
    heading: 'Life Shield',
    bodyText1: 'Policy Period: 10 years',
  },
]
const MyCoverage = () => {
  return (
    <Box>
      <Heading mt='20px' textAlign='center'>My Coverage</Heading>
      <CardList isOwned={true} dataList={COVERAGE_DATA} ></CardList>
      <Heading mt='20px'>New Products</Heading>
      <CardList isOwned={false} dataList={NEW_COVERAGE} ></CardList>
    </Box>

  )
}

export default MyCoverage