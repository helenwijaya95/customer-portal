'use client'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import logo from '../assets/logo.png'
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { usePathname} from "next/navigation";
import { signOut } from 'next-auth/react'
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/userSlice";

const NavLink = (props) => {
  const { children } = props
  const pathname = usePathname()
  const href = props.link.path
  const isActive = pathname === href;

  return (
    <Box
      className={isActive ? 'active' : ''}
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}>
      {children}
    </Box>
  )
}
// import Link from "next/link";
const Header = ({ list }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)
  const isLoggedIn = userState.name !== ''
  const signOutHandler = () => {
    dispatch(setUser({
      name: '',
      email: '',
      image: ''
    }))
    signOut();
  }
  return (
    <>
      <Box className="header" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            className="menu-btn"
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link href="/" w='auto'>
                <Image priority='false' src={logo} alt="logo" width={60} height={60} />
              </Link>
            </Box>
            {/* nav menu */}
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {list.map((link, idx) => (
                <NavLink key={idx} link={link}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          {

            <Flex alignItems={'center'}>
              <Button
                variant={'outline'}
                colorScheme={'blue'}
                size={'sm'}
                onClick={() => signOutHandler()}
                isDisabled={!isLoggedIn}
              >
                Sign out
              </Button>
            </Flex>

          }
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {list.map((link, idx) => (
                <NavLink key={idx} link={link}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )


}

export default Header;