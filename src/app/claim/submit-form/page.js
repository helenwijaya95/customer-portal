'use client'
import { Button, List, Text, ListItem, ListIcon, Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useRouter } from "next/navigation";
import { CheckIcon } from "@chakra-ui/icons";
const SubmitForm = () => {
  const formState = useSelector((state) => state.form)
  const currentStep = useSelector((state) => state.form.currentStep)

  const { push } = useRouter();
  useEffect(() => {
    console.log('submit-p')
    console.log(currentStep)
    console.log(formState)
  }, [formState])

  return (
    <>
      <Text>
        This form takes about 10 minutes to complete.
      </Text>
      <Box>
        <Heading as='h3' size='sm'>
          You will need:
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Diagnosis report
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Prescriptions and bills
          </ListItem>
        </List>
      </Box>
      <Button onClick={() => push('/claim/submit-form/patient-step')}>Continue to form</Button>
      {/* <Form steps={FORM_STEPS}></Form> */}
    </>
  )
}

export default SubmitForm;