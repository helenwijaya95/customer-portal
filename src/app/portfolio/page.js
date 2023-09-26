'use client'
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { fetchData } from "@/helper/fetchData";
import CustomTable from "@/components/table/CustomTable";

const Portfolio = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  const { push } = useRouter;
  const { session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push('/api/auth/signin')
      return <p>Access Denied</p>
    },
  })

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsFetching(true)
      try {
        const fetchDataOptions = {
          pageIndex: 0,
          pageSize: 5
        }
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
    fetchPortfolio()
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
      {
        isSignedIn ?
          <>
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

export default Portfolio;