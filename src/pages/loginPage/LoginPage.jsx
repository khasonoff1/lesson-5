import { Fragment } from "react";

import user from "../../assets/images/user.svg";
import password from "../../assets/images/password.svg";

import "./login.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const LoginPage = () => {
  //   const getToken = async () => {
  //     try {
  //       const data = await axios.get("https://reqres.in/api/login");
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getToken();

  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <Fragment>
      <main className="login-main">
        <div className="bg">
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
        </div>
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form id="formTo" onSubmit={login}>
            <label className="user-label">
              <img src={user} alt="user" />
            </label>
            <input
              type="text"
              id="userTo"
              className="inputs username"
              placeholder="username"
            />
            <label className="pass-label">
              <img src={password} alt="password" />
            </label>
            <input
              type="password"
              id="passwordTo"
              className="inputs password"
              placeholder="password"
            />
            <button type="submit" className="loginTo">
              Login
            </button>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default LoginPage;
