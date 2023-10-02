import "./Login.css";

import { useState } from "react";

import axios from "axios";

import { login } from "../redux/adminSlice";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import Alert from "react-bootstrap/Alert";

import { NavLink } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [usernameValue, setUsernameValue] = useState("");

  const [passwordValue, setPasswordValue] = useState("");

  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    event.preventDefault();

    const response = await axios({
      method: "POST",

      url: `${baseUrl}/admin/login`,

      data: {
        username: usernameValue,

        password: passwordValue,
      },
    });

    if (response.data.token) {
      dispatch(login(response.data));

      setMessage(null);

      navigate("/");
    } else {
      setMessage(response.data.error);

      setPasswordValue("");

      setUsernameValue("");
    }
  };

  return (
    <div className="container-fluid login_admin_content d-flex justify-content-center align-items-center pb-5">
      <div className="row wrapper align-items-center ">
        <div className="login-box login">
          <h2 className="text-center title">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon"></span>

              <input
                type="text"
                name="username"
                id="username "
                required
                value={usernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}
              />

              <label>
                <ion-icon name="mail-outline"></ion-icon>Username
              </label>
            </div>

            <div className="input-box">
              <span className="icon"></span>

              <input
                type="password"
                name="password"
                id="password"
                required
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />

              <label>
                <ion-icon name="lock-closed-outline"></ion-icon>Password
              </label>
            </div>

            {message && <Alert variant={"warning"}>{message}</Alert>}

            <div className="remember-forgot mb-3 mt-5">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot your password?</a>
            </div>

            <button type="submit" className="boton mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
