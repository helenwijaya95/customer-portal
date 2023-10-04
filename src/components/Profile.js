import { Flex, Heading, Image, Center, Text } from '@chakra-ui/react';
import ImageNext from 'next/image';
import defaultProfPic from '../images/default.png'
const Profile = ({ user }) => {
  // user data from store

  return (
    <Center >
      <Flex flexDir='column'>
        <Center>
          {
            user.avatar ?
              (<Image
                priority="false" width='80px' height='80px' borderRadius='50%' src={user.avatar}
                alt='profile picture' />) :

              (<ImageNext
                priority="false" width='80' height='80' src={defaultProfPic} alt='profile picture' />)
          }
        </Center>
        <Heading textAlign='center' as='h3' size='lg' fontWeight='400' mb='5px'>Welcome,<br />{user.name}</Heading>
        <Text mb="20px">{user.email}</Text>
      </Flex>
    </Center >
  )


}

export default Profile;