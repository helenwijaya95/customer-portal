import { Flex, Heading, Image, Center } from '@chakra-ui/react';
import ImageNext from 'next/image';
import defaultProfPic from '../assets/default.png'
const Profile = ({ user }) => {
  return (
    <Center >
      <Flex flexDir='column'>
        <Center>
          {
            user.image ?
              (<Image
                priority="false" width='80px' height='80px' borderRadius='50%' src={user.image}
                alt='profile picture' />) :

              (<ImageNext
                priority="false" width='80' height='80' borderRadius='50%' src={defaultProfPic} alt='profile picture' />)
          }
        </Center>
        <Heading textAlign='center' as='h3' size='lg' fontWeight='400'>Welcome,<br />{user.name}</Heading>
      </Flex>
    </Center >
  )


}

export default Profile;