// will be the input where you type in the name, password, etc;
import React from 'react';

import validation from './validation';
import useForm from './hooks/useForm';

import './formSignup.css'

const FormSignup = () => {

  // Destructure and pull out the values needed from useForm
  const { handleChange, values, handleSubmit, errors } = useForm(validation);
  console.log("FormSignup")
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Get Started Today! Create your account by filling out the information below.</h3>
        {/* Username */}
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            UserName:
          </label>
          <input
            className="form-input"
            name="username"
            id="username"
            type="text"
            placeholder="Enter username here"
            value={values.username} // referencing the values object in useForm
            onChange={handleChange}
          />
          {errors.username && <p className="error-username">{errors.username}</p>}
        </div>

        {/* Email */}
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            className="form-input"
            name="email"
            id="email"
            type="email"
            placeholder="Enter email here"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-email">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            className="form-input"
            name="password"
            id="password"
            type="password"
            placeholder="Enter password here"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-password">{errors.password}</p>}
        </div>

        {/* Password2 */}
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            name="password2"
            id="password2"
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p className="error-password2">{errors.password2}</p>}
        </div>

        {/* Button */}
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>

        <span className="form-input-login">
          {/* eslint-disable-next-line */}
          Already have an account? <a href="#">Login Here</a>
        </span>

      </form>
    </div>
  )
}


export default FormSignup;
