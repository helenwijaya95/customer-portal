import Loader from '@/components/Loader';
import Profile from '@/components/Profile'
import CustomTable from '@/components/table/CustomTable';
import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const baseURL = "https://reqres.in/api/users";


export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return {
    props: { user: context.req.session.user },
  };
}

export default function Home({ user }) {
  const [isFetching, setisFetching] = useState(false);
  const [users, setUsers] = useState([]);
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
      <Profile user={user} />
      {/* dependant list */}
      <Heading mt='25px'>Dependant</Heading>
      {(!isFetching && users.length > 0)
        ? <CustomTable defaultData={users} columns={COLUMNS} />
        : <Loader text='Retrieving data...' />
      }
    </Box>
  )
}
