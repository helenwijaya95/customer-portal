'use client'
import Stepper from "@/app/components/multistep-form/Stepper"
import StoreProvider from "@/app/components/providers/StoreProvider"
import { useSelector } from "react-redux"
useSelector
const FormLayout = ({ children }) => {
  const currentStep = useSelector((state) => state.form.currentStep)
  const FORM_STEPS = [
    { title: 'First', description: 'Patient Details' },
    { title: 'Second', description: 'Clinic Details' },
    { title: 'Third', description: 'Comfirmation' },

  ];

  return (
    <StoreProvider>
      <h1>{currentStep}</h1>
      <Stepper activeIdx={currentStep} steps={FORM_STEPS}></Stepper>
      {children}
    </StoreProvider>
  )
}

export default FormLayout