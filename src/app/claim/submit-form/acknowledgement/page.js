'use client'
import { setCurrentStep } from "@/store/formSlice"
import { Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Ack = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentStep(3))
  }, [])
  return (
    <Heading as='h1' size='2xl'>
      Your claim has been submitted
    </Heading>
  )
}

export default Ack