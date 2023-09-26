import { Button, Flex, Heading, Image, Center } from '@chakra-ui/react';
import ImageNext from 'next/image';
import defaultProfPic from '../assets/default.png'
const Profile = ({ session, status, signIn, signOut }) => {
  if (status === 'loading') return <h1> loading... please wait</h1>;

  if (status === 'authenticated') {
    return <>
      <Center>
        <Flex flexDir='column'>
          <Center>
            {
              session.user.image ?
                (<Image
                  priority="false" width='80px' height='80px' borderRadius='50%' src={session.user.image}
                  alt='profile picture' />) :

                (<ImageNext
                  priority="false" width='80' height='80' borderRadius='50%' src={defaultProfPic} alt='profile picture' />)
            }
          </Center>
          <Heading textAlign='center' as='h3' size='lg'>Welcome,<br />{session.user?.name}</Heading>
        </Flex>
      </Center>
    </>
  }

  return (
    <>
      Not signed in <br />
      <Button colorScheme='blue.500' onClick={() => signIn('google', { callbackUrl: '/' })}>Sign in via Google</Button>
    </>
  )
}

export default Profile;