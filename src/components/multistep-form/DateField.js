import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";

const DateField = forwardRef((props, ref) => {
  return (<Input type="date" ref={ref} className="form-control" {...props}
  />)
});

export default DateField;