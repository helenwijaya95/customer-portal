import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter()
  async function login(router) {
    const res = await fetch("/api/auth/google");
    const data = await res.json();
    router.push(data.Location);
  }
  return (
    <Container>
      <Heading>Authorization Required</Heading>
      <Button onClick={() => login(router)}>Please login via Google</Button>
    </Container>
  )
}

export default Error