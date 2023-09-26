'use client'
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import TransactionList from "@/components/TransactionList";
import { fetchData } from "@/helper/fetchData";
const Claim = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState([])
  const { push } = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push('/api/auth/signin')
      return <p>Access Denied</p>
    },
  })

  useEffect(() => {
    const fetchTransaction = async () => {
      setIsFetching(true)
      try {
        const options = {
          type: 'trans',
          pageIndex: 0,
          pageSize: 5
        }
        const response = await fetchData(options);
        if (response) {
          console.log(response)
          const retrievedData = response?.rows
          setData(retrievedData)
          setIsFetching(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    console.log(data)
    fetchTransaction()
    setIsSignedIn(true)
  }, [])
  if (status === "loading") {
    return "Authenticating..."
  }

  if (status !== 'authenticated') {
    return <p>Access Denied</p>
  }

  return (

    <Box minH='calc(100vh - 80px)'>
      <Heading>Claim</Heading>

      {isSignedIn ?
        <>
          <Button size='md' onClick={() => push('/claim/submit-form')}>Submit Claim</Button>
          <Text>User is logged in</Text>
          {
            (!isFetching && data.length > 0)
              ? <TransactionList data={data}/>
              : 'Loading...'
          }
        </>
        :
        <></>
      }
    </Box>
  )
}

export default Claim; 