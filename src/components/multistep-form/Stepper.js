'use client'
import {
  Stepper as UIStepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps
} from "@chakra-ui/react"
import { useEffect } from "react"
const Stepper = ({ activeIdx, steps }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: activeIdx,
    count: steps.length,
  })
  useEffect(() => {
    setActiveStep(activeIdx)
  }, [activeIdx, setActiveStep])
  return (
    <>
      <UIStepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </UIStepper>
    </>
  )
}

export default Stepper