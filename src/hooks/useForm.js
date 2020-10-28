import { useState, useEffect } from 'react';


const useForm = (callback, validation) => {
  console.log("useForm")

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    // values will consist each value on the input form
    const { name, value } = e.target;
    setValues({
      ...values,
      // [e.target.name]: e.target.value
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setIsSubmitting(true);
  }


  // NEED TO READ MORE INTO THIS... 
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(callback());
      callback();
    }
  }, [errors])



  // **don't forget to R E T U R N / P A S S the handleChange function, and any values, errors we need to return. caused me headache
  return { handleChange, handleSubmit, values, errors }
}

export default useForm;

// after I create this, I need to go and add to each input on the form as an "onChange" event listener


