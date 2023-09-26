'use client'
import FormInfo from "@/components/multistep-form/FormInfo";
const SubmitForm = () => {
  const btnAction = () => {
    console.log('callback action')
  }
  return (
    <FormInfo
      time='10 minutes'
      requirements={
        ['Diagnosis report', 'Prescription and bills']
      }
      actionList={
        [
          {
            text: 'Continue to form',
            redirect: '/patient-step',
            actionFunc: btnAction
          }
        ]
      }
    />
  )
}

export default SubmitForm;