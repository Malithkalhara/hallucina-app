import React from "react";
import { BreadCrums } from "../../components/BreadCrums/BreadCrums";

const Account = () => {
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
                      <form action="" className="aa-login-form">
                        <label for="">
                          Username or Email address<span>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Username or email"></input>
                        <label for="">
                          Password<span>*</span>
                        </label>
                        <input type="password" placeholder="Password"></input>
                        <button type="submit" className="aa-browse-btn">
                          Login
                        </button>
                        <label className="rememberme" for="rememberme">
                          <input type="checkbox" id="rememberme"></input>{" "}
                          Remember me{" "}
                        </label>
                        <p className="aa-lost-password">
                          <a href="#">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="aa-myaccount-register">
                      <h4>Register</h4>
                      <form action="" className="aa-login-form">
                        <label for="">
                          Username or Email address<span>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Username or email"></input>
                        <label for="">
                          Password<span>*</span>
                        </label>
                        <input type="password" placeholder="Password"></input>
                        <button type="submit" className="aa-browse-btn">
                          Register
                        </button>
                      </form>
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
