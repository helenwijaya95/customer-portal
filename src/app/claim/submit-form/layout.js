'use client'
import { useSelector } from "react-redux"
import Stepper from "@/components/multistep-form/Stepper"
import StoreProvider from "@/components/providers/StoreProvider"
import { Box } from "@chakra-ui/react"

const FormLayout = ({ children }) => {
  const currentStep = useSelector((state) => state.form.currentStep)
  const FORM_STEPS = [
    { title: 'First', description: 'Patient Details' },
    { title: 'Second', description: 'Clinic Details' },
    { title: 'Third', description: 'Confirmation' },
  ];

  return (
    <StoreProvider>
      <Stepper activeIdx={currentStep} steps={FORM_STEPS}></Stepper>
      <Box p="20px" className="form-wrapper">
        {children}
      </Box>
    </StoreProvider>

  )
}

export default FormLayout