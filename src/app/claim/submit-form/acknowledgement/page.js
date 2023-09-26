'use client'
import { Button, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCurrentStep } from "@/store/formSlice"
import { useRouter } from "next/navigation"

const Ack = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentStep(3))
  }, [])
  return (
    <>
      <Heading as='h1' size='xl'>
        Your claim has been submitted
      </Heading>
      <Button onClick={() => push('/claim')}>See my claims</Button>
    </>
  )
}

export default Ack