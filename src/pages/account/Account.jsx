import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BreadCrums } from "../../components/BreadCrums/BreadCrums";
import { getUser, login } from "../../redux/reducers/authSlice";
import { ApiClient } from "../../utils/ApiClient";

const Account = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [registerEmail, setRegisterEmail] = useState(null);
  const [registerPassword, setRegisterPassword] = useState(null);

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isRegisterValidPassword, setIsRegisterValidPassword] = useState(false);
  const [isRegisterValidEmail, setIsRegisterValidEmail] = useState(false);
  const userData = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onLoginEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onRegisterPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };
  const onRegisterEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };

  const handleRegister = async () => {
    await ApiClient.post("/user/register", {
      email: registerEmail,
      password: registerPassword,
    })
      .then(async (response) => {
        toast.success("User registered successfully");
        await ApiClient.post("/user/login", {
          email: registerEmail,
          password: registerPassword,
        })
          .then((response) => {
            const decodedToken = jwtDecode(response.data.accessToken);
            dispatch(login({ ...decodedToken }));
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            navigate("/");

            toast.success("User logged in successfully");
          })
          .catch((error) => {
            toast.error(
              `Error logging in user: ${error.response?.data?.message}`
            );
          });
      })
      .catch((error) => {
        toast.error(`Error registering user: ${error.response?.data?.message}`);
      })
      .finally(() => {
        setRegisterPassword(null);
        setRegisterEmail(null);
      });
  };

  const handleLogin = async () => {
    await ApiClient.post("/user/login", {
      email: email,
      password: password,
    })
      .then(async (response) => {
        const decodedToken = jwtDecode(response.data.accessToken);
        dispatch(login({ ...decodedToken }));
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        if (decodedToken?.role === "admin") {
          console.log(userData);
          navigate("/admin");
        } else {
          navigate("/");
        }
        toast.success("User logged in successfully");
      })
      .catch((error) => {
        toast.error(`Error registering user: ${error.response?.data?.message}`);
      })
      .finally(() => {
        setRegisterPassword(null);
        setRegisterEmail(null);
      });
  };

  return (
    <div>
      <BreadCrums page="Account" />

      <section id="aa-myaccount">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-myaccount-area">
                <div className="row">
                  <div className="col-md-6">
                    <div className="aa-myaccount-login">
                      <div className="mb-40">
                        <h4>Login</h4>
                      </div>
                      <div className="aa-login-form">
                        <label for="">
                          Username or Email address<span>*</span>
                        </label>
                        <input
                          value={email}
                          onChange={(e) => onLoginEmailChange(e)}
                          type="text"
                          placeholder="Username or email"
                          name="email"></input>
                        <label for="">
                          Password<span>*</span>
                        </label>
                        <input
                          value={password}
                          type="password"
                          placeholder="Password"
                          onChange={(e) => onLoginPasswordChange(e)}></input>
                        <button
                          className="aa-browse-btn"
                          disabled={isValidEmail && isValidPassword}
                          onClick={handleLogin}>
                          Login
                        </button>
                        <label className="rememberme" for="rememberme">
                          <input type="checkbox" id="rememberme"></input>{" "}
                          Remember me{" "}
                        </label>
                        <p className="aa-lost-password">
                          <a href="#">Lost your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aa-myaccount-register">
                      <h4>Register</h4>
                      <div className="aa-login-form">
                        <label for="">
                          Username or Email address<span>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Username or email"
                          value={registerEmail}
                          onChange={(e) => onRegisterEmailChange(e)}
                          name="email"></input>
                        <label for="">
                          Password<span>*</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          value={registerPassword}
                          onChange={(e) => onRegisterPasswordChange(e)}></input>
                        <button
                          className="aa-browse-btn"
                          onClick={handleRegister}
                          disabled={
                            isRegisterValidEmail && isRegisterValidPassword
                          }>
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
