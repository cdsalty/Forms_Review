
// custom validation:
export default function validation(values) {
  console.log("VALIDATION HERE")
  // I need an object to hold the errors 
  let errors = {}
  console.log("checking in from validation")
  // Username
  if (!values.username.trim()) {
    errors.username = "A username is required"
    console.log("username error")
  }

  // Email 
  if (!values.email) {
    errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a VALID email address"
  }

  // Password 1
  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more"
  }

  // Password 2
  if (!values.password2) {
    errors.password2 = "Password is required"
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords must match. Please try again"
  }

  // D O N ' T  F O R G E T  T O  R E T U R N  T H E  E R R O R S
  return errors;
}

/*
To use:
- import into FormSignup: ->  import validation from './valdidation'
- make sure to add / include 'errors' in the detstructured content for useForm
- pass the validation to the form: -> const { handleChange, values, hanldeSubmit } = useForm(validation);
- Now, go inside of the "useForm" hook:
  - pass in validation to the useForm component as a parameter
  - make sure to have errors inside the return values at the bottom
  - inside handleSubmit, add  ->  setErrors(validation(values))
    - calling setErrors... Passing it validation on the values

*/