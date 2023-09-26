'use client'
import { Heading, Box, Text, Button, Container } from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import CustomTable from '../components/table/CustomTable'
import extData from '../data'
import { fetchData, Person } from '../helper/fetchData'

const Claim = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  const { push } = useRouter();
  const { session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push('/api/auth/signin')
      return <p>Access Denied</p>
    },
  })

  const fetchDataOptions = {
    pageIndex: 0,
    pageSize: 5
  }
  useEffect(() => {
    const fethClaimData = async () => {
      setIsFetching(true)
      try {
        const response = await fetchData(fetchDataOptions)
        if (response) {
          console.log(response)
          const retrievedData = response?.rows
          setData(retrievedData)
          setIsFetching(false)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fethClaimData()
    setIsSignedIn(true)
  }, [])
  if (status === "loading") {
    return "Authenticating..."
  }

  if (status !== 'authenticated') {
    return <p>Access Denied</p>
  }
  const columns = [
    {
      display: "Claim ID",
      accessor: "id"
    },
    {
      display: "Type",
      accessor: "type"
    },
    {
      display: "Submission Date",
      accessor: "submission_date"
    },
    {
      display: "Amount",
      accessor: "amount",
    },
    {
      display: "Status",
      accessor: "status",
    },
  ]

  return (

    <Box minH='calc(100vh - 80px)'>
      <Heading>Claim</Heading>

      {isSignedIn ?
        <>
          <Button size='md' onClick={() => push('/claim/submit-form')}>Submit Claim</Button>
          <Text>User is logged in</Text>
          {(!isFetching && data.length > 0)
            ? <CustomTable defaultData={data} columns={columns} />
            : 'Loading...'}
        </>
        :
        <></>
      }
    </Box>
  )
}

export default Claim; 