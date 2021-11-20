import React, { useContext, useEffect, useState } from "react";
import { users } from "../data/users";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
const StudentLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const { setIsLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();

  const submitHandler = (e) => {
    e.preventDefault();

    const user = users.filter(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user.length === 1) {
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(user[0]));

      navigate(`../${user[0].userId}/dashboard`, { replace: true });
    } else {
      setIsLoggedIn(false);
    }
  };
  return (
    <div className='login-page'>
      <h1>Login as Student</h1>
      <form className='login-form' onSubmit={submitHandler}>
        <div className='input'>
          <label className='login-label' for='email'>
            Email
          </label>
          <input
            className='login-input'
            value={email}
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
          />
        </div>
        <div className='input'>
          <label className='login-label' for='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            checked={remember}
            onChange={() => setRemember(!remember)}
            id='remember'
          />

          <label htmlFor='remember'>Remeber me</label>
        </div>

        <input className='button login-submit ' type='submit' value='Login' />
      </form>
    </div>
  );
};

export default StudentLogin;
