import Loader from '@/components/Loader';
import Profile from '@/components/Profile'
import CustomTable from '@/components/table/CustomTable';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { selectUserState, setUserState } from "../store/userSlice";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from 'react-redux';
const baseURL = "https://reqres.in/api/users";


const filterName = (data, chars) => {
  const filtered = data.filter(d =>
    d['first_name'].charAt(0).toUpperCase() === chars[0] ||
    d['last_name'].charAt(0).toUpperCase() === chars[1]
  )
  return filtered;
}
const fetchData = async (apiURL) => {
  const res = await fetch(apiURL);
  let dataTemp = []

  if (res) {
    const data = await res.json()
    const totalPage = data['total_pages'];
    dataTemp = dataTemp.concat(data.data)
    if (totalPage > 1) {

      for (let i = 2; i <= totalPage; i++) {
        const response = await fetch(`${apiURL}?page=${i}`)
        const responseJson = await response.json()
        dataTemp = dataTemp.concat(responseJson.data)
      }

    }
    const filteredUser = filterName(dataTemp, ['G', 'W'])
    return filteredUser
  }
}

export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
  const dependantData = await fetchData(baseURL);
  return {
    props: { auth: context.req.session.user, dependant: dependantData },
  };
}

export default function Home({ auth, dependant }) {
  const [isFetching, setisFetching] = useState(false);
  const userState = useSelector(selectUserState);
  const authState = useSelector(selectAuthState);

  const dispatch = useDispatch();
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
    {
      display: "",
      accessor: "action",
    },
  ]
  useEffect(() => {
    dispatch(setAuthState({
      name: auth.name,
      email: auth.email,
      avatar: auth.picture
    }))
    dispatch(setUserState(dependant))
  }, [auth, dependant])
  return (
    <Box>
      <Profile user={authState} />
      {/* dependant list */}
      {(!isFetching && userState.length > 0)
        ? <CustomTable defaultData={userState} columns={COLUMNS} />
        : <Loader text='Retrieving data...' />
      }
    </Box>
  )
}
