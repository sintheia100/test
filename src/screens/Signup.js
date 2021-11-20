import React, { useState } from "react";

const Signup = () => {
  const [signUpInput, setSignUpInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  console.log(signUpInput);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Sign up</h1>
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <div className='input'>
          <label htmlFor='f-name'>First Name</label>
          <input
            type='text'
            className='login-input'
            name='f-name'
            id='f-name'
            placeholder={"First Name"}
            required
            value={signUpInput.firstName}
            onChange={(e) => setSignUpInput({ firstName: e.target.value })}
          />
        </div>
        <div className='input'>
          <label htmlFor='l-name'>Last Name</label>
          <input
            className='login-input'
            type='text'
            name='l-name'
            id='l-name'
            placeholder={"Last Name"}
            value={signUpInput.lastName}
            onChange={(e) => setSignUpInput({ lastName: e.target.value })}
            required
          />
        </div>
        <div className='input'>
          <label htmlFor='email'>Email</label>
          <input
            className='login-input'
            type='email'
            name='f-name'
            id='email'
            placeholder={"Email"}
            value={signUpInput.email}
            onChange={(e) => setSignUpInput({ email: e.target.value })}
            required
          />
        </div>
        <div className='input'>
          <label htmlFor='password'>Password</label>
          <input
            required
            type='password'
            className='login-input'
            name='password'
            id='password'
            value={signUpInput.password}
            onChange={(e) => setSignUpInput({ password: e.target.value })}
            placeholder={"Password"}
          />
        </div>
        <div className='input'>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input
            required
            type='password'
            className='login-input'
            name='password'
            id='cpassword'
            placeholder={"Confirm Password"}
            value={signUpInput.confirmPassword}
            onChange={(e) =>
              setSignUpInput({ confirmPassword: e.target.value })
            }
          />
        </div>
        <input
          type='submit'
          value='Sign up'
          className='button signup'
          style={{ marginBottom: "2rem" }}
        />
      </form>
    </div>
  );
};

export default Signup;
