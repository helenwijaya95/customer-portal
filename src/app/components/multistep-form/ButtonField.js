import { Button } from "@chakra-ui/react";
import { forwardRef } from "react";

const ButtonField = forwardRef(
  ({ children, variant = "solid", ...props }, ref) => {
    return (
      <Button {...props}>{children}</Button>
    )
  }
)

export default ButtonField