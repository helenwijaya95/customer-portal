const Form = ({ children, ...props }) => {
  return (
    <form {...props} noValidate>
      {children}
    </form>
  )
}

export default Form
