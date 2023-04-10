import React, { useState } from "react";
import Header from "../../header/Header";
import "./login.css";

export const Login = () => {
  const [displayReg, setDisplayReg] = useState(false);
  return (
    <div>
      <Header />
      <div className="login-main-div">
        <div className="login">
          <h1>Login</h1>
          <form action="/">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button type="submit">Submit</button>
          </form>
          <p onClick={() => setDisplayReg(true)}>Don`t have an account yet?</p>
        </div>
        {displayReg && (
          <div className="registration">
            <h1>Registration</h1>
            <form action="/login-reg">
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor="">Last Name</label>
              <input type="text" />
              <label htmlFor="">E-mail</label>
              <input type="email" />
              <label htmlFor="">New password</label>
              <input type="password" />
              <label htmlFor="">Confarm new password</label>
              <input type="password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
