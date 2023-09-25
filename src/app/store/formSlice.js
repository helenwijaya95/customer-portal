import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    currentStep: 0,
    steps: {
      patient: {
        name: '',
        visitDate: ''
      },
      clinic: {
        clinicName: '',
        diagnosis: '',
      },
    },
  },
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload
    },
    setFormData: (state, action) => {
      const formType = action.payload.formType ?? 'patient'
      state.steps[`${formType}`] = action.payload.data
    }
  }
})

export const { setFormData, setCurrentStep } = formSlice.actions

export default formSlice.reducer