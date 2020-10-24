// will be the input where you type in the name, password, etc;
import React from 'react';
import './formSignup.css'


const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h2>Get Started Today! Create your account by filling out the information below.</h2>
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
          />
        </div>
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
          />
        </div>
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
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            name="password2"
            id="password2"
            className="form-input"
            type="password2"
            placeholder="Confirm Password"
          />
        </div>
      </form>
    </div>
  )
}

export default FormSignup;
