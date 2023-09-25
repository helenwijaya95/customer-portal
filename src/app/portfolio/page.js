'use client'
import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from '../components/table/CustomTable'
const Portfolio = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false)
  useEffect(() => {
    const data = [
      {

      }
    ]
    let totalPage;
    // const fetchUsers = async () => {
    //   setisFetching(true)
    //   try {
    //     const respTotal = await axios.get(baseURL);
    //     if (respTotal && respTotal.data) {
    //       totalPage = respTotal.data["total_pages"]
    //       usersTemp = usersTemp.concat(respTotal.data.data)
    //       if (totalPage > 1) {
    //         for (let i = 2; i <= totalPage; i++) {
    //           const response = await axios.get(`${baseURL}?page=${i}`);
    //           usersTemp = usersTemp.concat(response.data.data)
    //         }
    //       }
    //       const filteredUser = filterName(usersTemp, ['G', 'W'])
    //       setUsers(filteredUser)
    //       setisFetching(false)
    //     }
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }

    // fetchUsers();
  }, [])
  return (
    <Box minH='calc(100vh - 80px)'>
      <Heading>Portfolio</Heading>
      {(!isFetching && data.length > 0)
        ? <CustomTable defaultData={data} columns={columns} />
        : 'Loading...'}
    </Box>
  )
}

export default Portfolio;