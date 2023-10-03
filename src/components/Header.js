'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import Image from "next/image";

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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.png'

const NavLink = (props) => {
  const { children } = props
  const pathname = usePathname()
  const href = props.link.path
  const isActive = pathname === href;

  return (
    <Link
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
    </Link>
  )
}

const Header = ({ currentItem, logout, user, list }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isLoggedIn = user === null ? false : true

  return (
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

        {/* action button */}
        {

          <Flex alignItems={'center'}>
            {!isLoggedIn ? <Button
              variant={'outline'}
              colorScheme={'blue'}
              size={'sm'}

            >
              Sign in with Google
            </Button> : <Button
              variant={'outline'}
              colorScheme={'blue'}
              size={'sm'}
              onClick={() => logout(router)}
            >
              Logout
            </Button>}

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
  );
}

export default Header;
