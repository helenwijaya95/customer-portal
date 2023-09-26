'use client'
import { useEffect, useState } from "react";
import { Heading, Box, Button, Flex, Center, IconButton } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { fetchData } from "@/helper/fetchData";
import TransactionList from "@/components/TransactionList";
import Loader from "@/components/Loader";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Claim = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState([])
  const { push } = useRouter();

  useEffect(() => {
    const fetchTransaction = async () => {
      setIsFetching(true)
      try {
        const OPTIONS = {
          type: 'trans',
          pageIndex: 0,
          pageSize: 5
        }
        const response = await fetchData(OPTIONS);
        if (response) {
          const retrievedData = response?.rows
          setData(retrievedData)
          setIsFetching(false)
        }
      } catch (error) {
        console.log(error)
        setIsFetching(false)
      }
    }
    fetchTransaction()
  }, [])

  return (
    <Box>
      <Center flexDirection='column' mb='20px'>
        <Heading as='h1'>Claim</Heading>
        <Button size='sm' colorScheme='blue' aria-label="Submit claim" leftIcon={<PlusSquareIcon />} onClick={() => push('/claim/submit-form')}>Submit Claim</Button >
      </Center>
      {
        (!isFetching && data.length > 0)
          ? <TransactionList data={data} />
          : <Loader text='Retrieving data...' />
      }
    </Box>
  )
}

export default Claim; 