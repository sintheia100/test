import React, { useContext, useState } from "react";
import { users } from "../data/users";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, useHistory } from "react-router-dom";
const TeacherLogin = () => {
  const { isLogggedIn, setIsLoggedIn } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();

    const user = users.filter(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.instructor === true
    );
    console.log(user);
    if (user.length === 1) {
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(users[0]));

      navigate.push(`/${user[0].userId}/instructor/dashboard`);
    } else {
      setIsLoggedIn(false);
    }
  };

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
            required
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

        <input
          onClick={submitHandler}
          className='button login-submit '
          type='submit'
          value='Login'
        />
      </form>
    </div>
  );
};

export default TeacherLogin;
