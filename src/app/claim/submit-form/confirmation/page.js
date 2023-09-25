'use client'
import ButtonField from "@/app/components/multistep-form/ButtonField";
import Form from "@/app/components/multistep-form/Form";
import { Section, SectionRow } from "@/app/components/multistep-form/Section";
import { setCurrentStep } from "@/app/store/formSlice";
import { Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Confirmation = () => {
  const parentPath = '/claim/submit-form'
  const dispatch = useDispatch();
  const { push } = useRouter();
  const formData = useSelector((state) => state.form.steps)
  const { handleSubmit } = useForm({ defaultValues: formData })


  const submitData = (data) => {
    // submit data to server
    console.info(data)
    push('/claim/submit-form/acknowledgement')
  }
  useEffect(() => {
    dispatch(setCurrentStep(2))
  }, [])
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <Heading as='h1' size='xl'> Confirmation</Heading>
      <Section title="Patient Details" url={`${parentPath}/patient-step`} >
        <SectionRow>
          <Text>Name</Text>
          <Text>{formData.patient.name}</Text>
        </SectionRow>
        <SectionRow>
          <Text>Visit Date</Text>
          <Text>{formData.patient.visitDate}</Text>
        </SectionRow>
      </Section>
      <Section title="Clinic Details" url={`${parentPath}/clinic-step`} >
        <SectionRow>
          <Text>Clinic Name</Text>
          <Text>{formData.clinic.clinicName}</Text>
        </SectionRow>
        <SectionRow>
          <Text>Diagnosis</Text>
          <Text>{formData.clinic.diagnosis}</Text>
        </SectionRow>
      </Section>
      <ButtonField type='Submit'>Submit</ButtonField>
    </Form >
  )
}

export default Confirmation