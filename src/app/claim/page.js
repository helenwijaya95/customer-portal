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
      push('/')
      return <p>Access Denied</p>
    },
  })

  const fetchDataOptions = {
    pageIndex: 0,
    pageSize: 5
  }
  useEffect(() => {
    try {
      setIsFetching(true)

      fetchData(fetchDataOptions).then((resp) => {
        const retrievedData = resp?.rows
        setData(retrievedData)
        setIsFetching(false)
      });
    } catch (error) {
      console.log(error)
    }
    setIsSignedIn(true)
  }, [])
  if (status === "loading") {
    return "Loading..."
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
      <Container>
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
      </Container>

    </Box>
  )
}

export default Claim; 