'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentStep, setFormData } from "@/store/formSlice"
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { Box, FormLabel } from "@chakra-ui/react"
import Form from "@/components/multistep-form/Form"
import Field from "@/components/multistep-form/Field"
import ButtonField from "@/components/multistep-form/ButtonField"
import InputField from "@/components/multistep-form/InputField"
const ClinicStep = () => {
  const dataState = useSelector((state) => state.form.steps)
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: dataState.clinic, mode: "onSubmit" })
  const { push } = useRouter();
  const saveData = (data) => {
    dispatch(setFormData({ data: data, formType: 'clinic' }))
    push('/claim/submit-form/confirmation')
  }
  useEffect(() => {
    dispatch(setCurrentStep(1))
  }, [])
  return (
    <Box>
      <Form onSubmit={handleSubmit(saveData)}>
        <FormLabel as='legend'>
          Clinic Details
        </FormLabel>
        <Field label="Clinic Name" error={errors?.clinicName}>
          <InputField
            {...register('clinicName', { required: 'Clinic Name is required' })}
            id='clinic-name' />
        </Field>
        <Field label="Diagnosis" error={errors?.diagnosis}>
          <InputField
            {...register('diagnosis', { required: 'Diagnosis is required' })}
            id='diagnosis' />
        </Field>
        <ButtonField type='Submit'>Next</ButtonField>
      </Form>
    </Box>)
}

export default ClinicStep