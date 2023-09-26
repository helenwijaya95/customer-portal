import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  return (<Input ref={ref} className="form-control" {...props}
  />)
});

export default InputField;