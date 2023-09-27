'use client'
import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { SmallAddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'
import CustomTable from '@/components/table/CustomTable'
import Profile from '@/components/Profile'
import CardList from '@/components/CardList'
import Loader from '@/components/Loader'

const baseURL = "https://reqres.in/api/users";

const Index = () => {
  const { push } = useRouter();
  const [users, setUsers] = useState([]);
  const [isFetching, setisFetching] = useState(false);
  const userState = useSelector((state) => state.user)
  const filterName = (data, chars) => {
    const filtered = data.filter(d =>
      d['first_name'].charAt(0).toUpperCase() === chars[0] ||
      d['last_name'].charAt(0).toUpperCase() === chars[1]
    )
    return filtered;
  }

  const COLUMNS = [
    {
      display: "Avatar",
      accessor: "avatar"
    },
    {
      display: "First Name",
      accessor: "first_name"
    },
    {
      display: "Last Name",
      accessor: "last_name"
    },
    {
      display: "Email",
      accessor: "email",
    },
  ]
  const COVERAGE_DATA = [
    {
      heading: 'Clinical',
      subheading: 'Medical Protection',
      bodyText1: 'Policy Number: 1111',
      bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024'
    },
    {
      heading: 'Dental',
      subheading: 'Medical Protection',
      bodyText1: 'Policy Number: 2222',
      bodyText2: 'Policy Period: 21 November 2023 - 21 November 2024'
    },
  ]

  useEffect(() => {
    let totalPage;
    let usersTemp = []
    const fetchUsers = async () => {
      setisFetching(true)
      try {
        const respTotal = await axios.get(baseURL);
        if (respTotal && respTotal.data) {
          totalPage = respTotal.data["total_pages"]
          usersTemp = usersTemp.concat(respTotal.data.data)
          if (totalPage > 1) {
            for (let i = 2; i <= totalPage; i++) {
              const response = await axios.get(`${baseURL}?page=${i}`);
              usersTemp = usersTemp.concat(response.data.data)
            }
          }
          const filteredUser = filterName(usersTemp, ['G', 'W'])
          setUsers(filteredUser)
          setisFetching(false)
        }
      } catch (e) {
        console.error(e)
        setisFetching(false)
      }
    }
    fetchUsers()
  }, [])
  return (
    <Box>
      <Profile user={userState} />
      <Flex className='two-col-heading' justifyContent={'space-between'}>
        <Heading>My Coverage</Heading>
        <Button size='sm' colorScheme='blue' aria-label="Upgrade my coverage" leftIcon={<SmallAddIcon />} onClick={() => push('/my-coverage')}>Upgrade my coverage</Button>
      </Flex>
      <CardList isOwned={true} dataList={COVERAGE_DATA} />
      {/* dependant list */}
      <Heading mt='25px'>Dependent List</Heading>
      {(!isFetching && users.length > 0)
        ? <CustomTable defaultData={users} columns={COLUMNS} />
        : <Loader text='Retrieving data...' />
      }
    </Box >
  )
}

export default Index;