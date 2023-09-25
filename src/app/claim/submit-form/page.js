'use client'
import { Button, List, Text, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentStep } from "@/app/store/formSlice";
import { useRouter } from "next/navigation";
import Stepper from "@/app/components/multistep-form/Stepper";
import Link from "next/link";
import { CheckIcon } from "@chakra-ui/icons";
const SubmitForm = () => {
  const formState = useSelector((state) => state.form)
  const currentStep = useSelector((state) => state.form.currentStep)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch();
  const parentPath = '/claim/submit-form'

  const { push } = useRouter();
  useEffect(() => {
    console.log('submit-p')
    console.log(currentStep)
    console.log(formState)
  }, [formState])

  return (
    <>
      <h1>Submit form</h1>
      <Text>
        This form takes about 10 minutes to complete.
      </Text>
      <Box>
        You will need:
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