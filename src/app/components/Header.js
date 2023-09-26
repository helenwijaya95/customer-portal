import { Flex, Center, Box } from "@chakra-ui/react";
import Link from "next/link";
import logo from '../assets/logo.png'
import Image from "next/image";
// import Link from "next/link";
const Header = ({ list }) => {
  return (
    <Box h="100px" className="header">
      <Flex>
        <Center pt='10px' pb='20px' w='100px'>
          <Link href="/" w='auto'>
            <Image priority='false' src={logo} alt="logo" width={60} height={60} />
          </Link>
        </Center>
        <Center>
          <Flex>
            {
              list.map((item, idx) => (
                <Center pt="5px" pb="5px" key={idx} w='100px'>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </Center>
              ))
            }

          </Flex>
        </Center>
      </Flex >

    </Box >

  )
}

export default Header;