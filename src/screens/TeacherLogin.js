import React, { useState } from "react";

const TeacherLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    remember: false,
  });

  return (
    <div className='login-page'>
      <h1>Login as Instructor</h1>
      <form className='login-form'>
        <div className='input'>
          <label className='login-label' for='email'>
            Email
          </label>
          <input
            className='login-input'
            required
            value={input.email}
            type='email'
            name='email'
            id='email'
            onChange={(e) => setInput({ email: e.target.value })}
            placeholder={"Email"}
          />
        </div>
        <div className='input'>
          <label className='login-label' for='password'>
            Password
          </label>
          <input
            required
            type='password'
            name='password'
            id='password'
            value={input.password}
            onChange={(e) => setInput({ password: e.target.value })}
            className='login-input'
            placeholder={"Password"}
          />
        </div>
        <div
          style={{
            alignSelf: "flex-start",
            marginLeft: "1rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
          }}>
          <input
            style={{ marginRight: "1rem" }}
            type='checkbox'
            checked={input.remember}
            onChange={() => setInput({ remember: !input.remember })}
            id='remember'
          />

          <label htmlFor='remember'>Remeber me</label>
        </div>

        <input className='button login-submit ' type='submit' value='Login' />
      </form>
    </div>
  );
};

export default TeacherLogin;
