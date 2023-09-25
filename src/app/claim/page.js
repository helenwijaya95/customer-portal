'use client'
import { Heading, Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import CustomTable from '../components/table/CustomTable'
import extData from '../data'
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
  useEffect(() => {
    setData(extData.claimData.data);
    console.log(extData.claimData)
    setIsSignedIn(true)
    setIsFetching(false)


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


  // useEffect(() => {

  // }, [session])

  return (

    <Box minH='calc(100vh - 80px)'>
      <Heading>Claim</Heading>
      {isSignedIn ?
        <>
          <h1>data{data.length}</h1>
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