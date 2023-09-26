// Login.js

import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(LoginContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="container mt-5">
      <div className="card border-light mb-3">
        <div className="card-header text-center">Login Page</div>
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="email"
                placeholder="Email..."
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
