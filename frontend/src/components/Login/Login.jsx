import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom'
const Login = () => {
  const [login, setLogin] = useState("login");

  return (
    
    <div className="login">
      <div className="login-container">
        <Link className="back-button" to="/">back</Link>
        <div className="login-page">
          <div className="login-logo">
            <img src="./project-life.png" alt="" />
            Project LIFE
          </div>
          <h2>{login === "login" ? "Login" : "Sign up"}</h2>
          <form action="" className="login-details">
            <input
              className="login-email"
              type="text"
              required
              placeholder="email@email.com"
            />
            {login === "login" ? (
              <>
                <input
                  className="login-password"
                  type="password"
                  required
                  placeholder="Enter your password"
                />
              </>
            ) : (
              <>
                <input
                  type="password"
                  className="login-password"
                  required
                  placeholder="Create new password"
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm new password"
                />
              </>
            )}
            <button>{login === "login" ? "Login" : "Sign up"}</button>
          </form>
          {login === "login" ? (
            <p >
              Don't have an account?{" "}
              <button className="acc-button" onClick={() => setLogin("Sign up")}>Sign up!</button>
            </p>
          ) : (
            <p>
              Have an account?{" "}
              <button className="acc-button" onClick={() => setLogin("login")}>Sign in!</button>
            </p>
          )}
        </div>
      </div>
      <div className="img-box">
        <img src="./eagle.jpg" alt="" />
      </div>
    </div>
  );
};

export default Login;
