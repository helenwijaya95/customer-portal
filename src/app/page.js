'use client'
import React, { useState, useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import axios from 'axios'
import CustomTable from './components/table/CustomTable'
import Profile from './components/Profile'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import CardList from './components/CardList'

const baseURL = "https://reqres.in/api/users";

const Index = () => {
  const { data: session, status } = useSession();

  const { push } = useRouter();
  const [users, setUsers] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isFetching, setisFetching] = useState(false);
  const filterName = (data, chars) => {
    const filtered = data.filter(d =>
      d['first_name'].charAt(0).toUpperCase() === chars[0] ||
      d['last_name'].charAt(0).toUpperCase() === chars[1]
    )
    return filtered;
  }

  const columns = [
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

  const policyData = [
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
              console.log('loop')
              console.log(i)
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
      }
    }

    if (isSignedIn) fetchUsers();

  }, [isSignedIn])

  useEffect(() => {
    console.log(status)
    console.log(session)

    if (status !== 'loading') {
      if (status == 'unauthenticated' && !session) {
        console.log('no session')
        setIsSignedIn(false)
        push('/api/auth/signin')
      } else {
        console.log(session)
        setIsSignedIn(true)
      }
    }
  }, [session, status])


  return (
    <Box minH='calc(100vh - 80px)'>

      {/* user list */}
      {isSignedIn ?
        <>
          <Profile session={session} status={status} signIn={signIn} signOut={signOut} />
          <Heading>My Coverage</Heading>
          <CardList dataList={policyData} />
          {/* dependant list */}
          {(!isFetching && users.length > 0)
            ? <CustomTable defaultData={users} columns={columns} />
            : 'Loading...'}
        </>
        :
        <></>
      }
    </Box >
  )
}

export default Index;