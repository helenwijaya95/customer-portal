'use client'
import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { fetchData } from "@/helper/fetchData";
import CustomTable from "@/components/table/CustomTable";
import Loader from "@/components/Loader";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

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
          const retrievedData = response?.rows
          setData(retrievedData)
          setIsFetching(false)
        }
      } catch (e) {
        console.error(e)
        setIsFetching(false)
      }
    }
    fetchPortfolio()
  }, [])


  const COLUMNS = [
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
    <Box>
      <Heading as='h1' textAlign='center'>Portfolio</Heading>
      {(!isFetching && data.length > 0)
        ? <CustomTable defaultData={data} columns={COLUMNS} />
        : <Loader text='Retrieving data...' />}
    </Box>

  )
}

export default Portfolio;