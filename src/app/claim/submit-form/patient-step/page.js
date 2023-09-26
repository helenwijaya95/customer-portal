'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { Box, FormLabel } from "@chakra-ui/react"
import { setCurrentStep, setFormData } from "@/store/formSlice"
import Form from "@/components/multistep-form/Form"
import Field from "@/components/multistep-form/Field"
import ButtonField from "@/components/multistep-form/ButtonField"
import InputField from "@/components/multistep-form/InputField"

const PatientStep = () => {
  const defaultData = {
    name: '',
    visitDate: ''
  }
  const dataState = useSelector((state) => state.form.steps)
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: dataState.patient, mode: "onSubmit" })
  const { push } = useRouter();
  const saveData = (data) => {
    dispatch(setFormData({ data: data, formType: 'patient' }))
    push('/claim/submit-form/clinic-step')
  }

  useEffect(() => {
    dispatch(setCurrentStep(0))
  }, [])
  return (
    <Box>
      <Form onSubmit={handleSubmit(saveData)}>
        <FormLabel as='legend'>
          Patient Details
        </FormLabel>
        <Field label="Name" error={errors?.name}>
          <InputField
            {...register('name', { required: 'Name is required' })}
            id='name' />
        </Field>
        <Field label="Visit Date" error={errors?.visitDate}>
          <InputField
            {...register('visitDate', { required: 'Visit Date is required' })}
            id='visit-date' />
        </Field>
        <ButtonField type='Submit'>Next</ButtonField>
      </Form>
    </Box>)
}

export default PatientStep