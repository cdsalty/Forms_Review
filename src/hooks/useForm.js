import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // values will consist each value on the input form
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  // **don't forget to R E T U R N the handleChange function, and any values, errors we need to return. caused me headache
  return { handleChange, handleSubmit, values }
}

export default useForm;

// after I create this, I need to go and add to each input on the form as an onChange event listener


