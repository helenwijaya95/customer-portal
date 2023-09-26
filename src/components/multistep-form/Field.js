import { Box, FormLabel } from "@chakra-ui/react"
import React from "react"

const Field = ({ children, label, error }) => {
  const id = getChildId(children)
  return (
    <Box mt="10px" mb="15px">
      <FormLabel htmlFor={id} className='form-label'>{label}</FormLabel>
      {children}
      {error &&
        <Box m="10px 0 20px">
          <span className="error-msg"> {error.message}</span>
        </Box>}
    </Box>
  )
}


export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
}

export default Field
