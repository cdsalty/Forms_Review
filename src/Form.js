import React, { useState } from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess'
import './form.css';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => (setIsSubmitted(true));

  return (
    <div>
      {!isSubmitted ?
        (<FormSignup sumForm={submitForm} />)
        :
        (<FormSuccess />)}
    </div>
  );
}


export default Form;
