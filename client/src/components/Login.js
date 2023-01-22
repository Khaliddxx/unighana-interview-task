import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import "./Login.scss";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(user);

      const res = await axios.post(
        "http://localhost:5001/api/login",
        body,
        config
      );
      handleLogin(res.data.token, user.email);
      //   console.log(res);
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="box-form login-page">
        <div className="left">
          <div className="overlay">
            <h1>Hello World.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
            <span>
              <p>login with social media</p>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i> Login with
                Twitter
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="/register">Creat Your Account</a> it
            takes less than a minute
          </p>
          {/* <div className="inputs">
          <input type="text" placeholder="user name" />
          <br />
          <input type="password" placeholder="password" />
        </div>
        <br />
        <br />
        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" checked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p>forget password?</p>
        </div> */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
              />
            </div>
            {error && <p>{error}</p>}
            <input className="submit-btn" type="submit" value="Login" />
          </form>

          {/* <br />
        <button>Login</button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
